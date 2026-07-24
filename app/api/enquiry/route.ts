import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("API Key:",process.env.RESEND_API_KEY?.slice(0, 8));
export async function POST(req: Request) {
  try {
    const {
      selectedEvent,
      eventDate,
      location,
      guests,
      venue,
      services,
      vision,
      name,
      phone,
      email,
      contactMethod,
    } = await req.json();

    const enquiryNumber = `VE-${Date.now().toString().slice(-6)}`;

    // ============================
    // Send email to ValenteEvents
    // ============================

    const adminEmail = await resend.emails.send({
      from: "ValenteEvents <info@valenteevents.com>",
      to: ["info@valenteevents.com"],
      subject: `New ${selectedEvent} Enquiry - ${name}`,
      html: `
      <div style="font-family:Arial,sans-serif;padding:40px;max-width:700px;margin:auto;">

        <h1 style="color:#f97316;">New Event Enquiry</h1>

        <p><strong>Reference:</strong> ${enquiryNumber}</p>

        <hr>

        <h2>Event Details</h2>

        <table cellpadding="8">
          <tr><td><strong>Event Type</strong></td><td>${selectedEvent}</td></tr>
          <tr><td><strong>Date</strong></td><td>${eventDate}</td></tr>
          <tr><td><strong>Location</strong></td><td>${location}</td></tr>
          <tr><td><strong>Guests</strong></td><td>${guests}</td></tr>
          <tr><td><strong>Venue</strong></td><td>${venue}</td></tr>
          <tr><td><strong>Services</strong></td><td>${services.join(", ")}</td></tr>
          <tr><td><strong>Vision</strong></td><td>${vision || "Not provided"}</td></tr>
        </table>

        <hr>

        <h2>Customer Details</h2>

        <table cellpadding="8">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Preferred Contact</strong></td><td>${contactMethod}</td></tr>
        </table>

      </div>
      `,
    });

    console.log("========== ADMIN EMAIL ==========");
    console.log(adminEmail);

    if (adminEmail.error) {
      console.error("Admin email failed:", adminEmail.error);

      return NextResponse.json(
        {
          success: false,
          error: adminEmail.error,
        },
        { status: 500 }
      );
    }

    // ============================
    // Send confirmation to customer
    // ============================

    const customerEmail = await resend.emails.send({
      from: "ValenteEvents <info@valenteevents.com>",
      to: [email],
      subject: "We've received your enquiry!",
      html: `
      <div style="font-family:Arial,sans-serif;padding:40px;max-width:650px;margin:auto;text-align:center;">

        <h1 style="color:#f97316;">
          Thank You, ${name}!
        </h1>

        <p style="font-size:18px;">
          We've successfully received your enquiry.
        </p>

        <p>
          Our team will review your requirements and contact you within
          <strong>24 hours.</strong>
        </p>

        <br>

        <div style="background:#fff7ed;padding:20px;border-radius:10px;">
          <h3>Your Reference Number</h3>

          <h2 style="color:#f97316;">
            ${enquiryNumber}
          </h2>
        </div>

        <br>

        <p>
          Thank you for choosing
          <strong>ValenteEvents.</strong>
        </p>

      </div>
      `,
    });

    console.log("========== CUSTOMER EMAIL ==========");
    console.log(customerEmail);

    if (customerEmail.error) {
      console.error("Customer email failed:", customerEmail.error);

      return NextResponse.json(
        {
          success: false,
          error: customerEmail.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      enquiryNumber,
      adminEmailId: adminEmail.data?.id,
      customerEmailId: customerEmail.data?.id,
    });

  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown server error",
      },
      {
        status: 500,
      }
    );
  }
}

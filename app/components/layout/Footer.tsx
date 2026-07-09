import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-orange-500/20 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        <h3 className="text-3xl font-bold text-white">
          Valente Events
        </h3>

        <p className="text-gray-400 mt-2 mb-10">
          Where Every Moment Matters
        </p>

        <div className="space-y-5">

          <a
            href="https://www.instagram.com/eventsvalente/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-300 hover:text-orange-500 transition"
          >
            <FaInstagram className="text-2xl text-orange-500" />
            <span>@eventsvalente</span>
          </a>

          <a
            href="mailto:info@valenteevents.com"
            className="flex items-center gap-4 text-gray-300 hover:text-orange-500 transition"
          >
            <MdEmail className="text-2xl text-orange-500" />
            <span>info@valenteevents.com</span>
          </a>

          <a
            href="tel:+919074570751"
            className="flex items-center gap-4 text-gray-300 hover:text-orange-500 transition"
          >
            <FiPhoneCall className="text-2xl text-orange-500" />
            <span>+91 90745 70751</span>
          </a>

          <a
            href="https://wa.me/919074570751"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-300 hover:text-green-500 transition"
          >
            <FaWhatsapp className="text-2xl text-green-500" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="flex items-center gap-4 text-gray-300">
            <HiOutlineLocationMarker className="text-2xl text-orange-500" />
            <span>Kerala, India</span>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 w-full pt-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Valente Events. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

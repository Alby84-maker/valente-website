export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 border-b border-orange-500/20 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <img
          src="/logo.png"
          className="w-14"
          alt="Valente Events"
        />

        <div className="hidden md:flex gap-10">
          <a href="#home">Home</a>
<a href="#services">Services</a>
<a href="#gallery">Gallery</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
        </div>

        <button className="bg-orange-500 px-6 py-3 rounded-full shadow-lg shadow-orange-500/40 hover:scale-105 transition">
          Book Now
        </button>

      </div>
    </nav>
  );
}


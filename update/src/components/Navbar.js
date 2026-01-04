import { Link, useLocation } from "react-router-dom";
import ieeeLogo from "../assets/ieee-logo.png";
import { animatedScrollTo } from "../utils/animatedScroll";


export default function Navbar() {
  const location = useLocation();

  const handleContactScroll = () => {
    if (location.pathname !== "/") {
      // Go to home first
      window.location.href = "/#contact";
    } else {
      animatedScrollTo("contact");
    }
  };
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b1220]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* LOGO → HOME */}
        <Link to="/">
          <img src={ieeeLogo} alt="IEEE" className="h-48 cursor-pointer" />
        </Link>

        <ul className="hidden md:flex gap-9 text-xl items-center">

          {/* HOME */}
          <li>
            <Link
              to="/"
              className="hover:text-cyan-400 transition"
            >
              Home
            </Link>
          </li>

          {/* ABOUT */}
          <li>
            <Link
              to="/about"
              className="hover:text-cyan-400 transition"
            >
              About Us
            </Link>
          </li>

          {/* EXPLORE DROPDOWN */}
          <li className="relative group text-cyan-400 cursor-pointer">
            Explore
            <div className="absolute top-8 left-0 hidden group-hover:block">
              <div className="bg-[#0f1b35] p-6 rounded-xl grid grid-cols-2 gap-6 w-[420px] border border-white/10">

                <Link to="/explore/events" className="hover:text-cyan-400">
                  <h4 className="font-semibold">Events</h4>
                  <p className="text-xs text-gray-400">Latest IEEE events</p>
                </Link>

                <Link to="/explore/gallery" className="hover:text-cyan-400">
                  <h4 className="font-semibold">Gallery</h4>
                  <p className="text-xs text-gray-400">Event moments</p>
                </Link>

                {/* <Link to="/explore/newsletter" className="hover:text-cyan-400">
                  <h4 className="font-semibold">Newsletter</h4>
                  <p className="text-xs text-gray-400">Updates & insights</p>
                </Link> */}

              </div>
            </div>
          </li>

          <li>
            
          <Link to="/team"
          className="hover:text-cyan-400 transition">
          Team
          </Link>
          </li>

          {/* CONTACT */}
          <li>
            <Link
              // to="/contact"
              onClick={() => animatedScrollTo("footer-contact")}
              className="hover:text-cyan-400 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* JOIN BUTTON */}
        <Link
          to="/contact"
          className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
        >
          Join
        </Link>

      </div>
    </nav>
  );
}

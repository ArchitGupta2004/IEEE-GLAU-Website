import { Link } from "react-router-dom";
import ieeeLogo from "../assets/ieee-logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b1220]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={ieeeLogo} alt="IEEE" className="h-9" />
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-8 text-sm items-center">

          {/* HOME */}
          <li>
            <Link to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
          </li>

          {/* ABOUT DROPDOWN  */}
          <li className="relative group">
            <span className="cursor-pointer hover:text-cyan-400 transition">
              About Us
            </span>

            <div className="absolute left-0 top-full pt-4
                            opacity-0 invisible
                            group-hover:opacity-100 group-hover:visible
                            transition-all duration-200">
              <div className="bg-[#0f1b35] p-6 rounded-xl
                              grid grid-cols-2 gap-6 w-[420px]
                              border border-white/10">

                <Link to="/about/team" className="hover:text-cyan-400 transition">
                  <h4 className="font-semibold">Team</h4>
                  <p className="text-xs text-gray-400">
                    Core members & leads
                  </p>
                </Link>

                <Link to="/about/faculty" className="hover:text-cyan-400 transition">
                  <h4 className="font-semibold">Faculty</h4>
                  <p className="text-xs text-gray-400">
                    Mentors & advisors
                  </p>
                </Link>

                <Link
                  to="/about#achievements"
                  className="hover:text-cyan-400 transition col-span-2"
                >
                  <h4 className="font-semibold">Achievements</h4>
                  <p className="text-xs text-gray-400">
                    Awards & recognitions
                  </p>
                </Link>

              </div>
            </div>
          </li>

          {/* EXPLORE DROPDOWN */}
          <li className="relative group">
            <span className="cursor-pointer text-cyan-400">
              Explore
            </span>

            <div className="absolute left-0 top-full pt-4
                            opacity-0 invisible
                            group-hover:opacity-100 group-hover:visible
                            transition-all duration-200">
              <div className="bg-[#0f1b35] p-6 rounded-xl
                              grid grid-cols-2 gap-6 w-[420px]
                              border border-white/10">

                <Link to="/explore/events" className="hover:text-cyan-400 transition">
                  <h4 className="font-semibold">Events</h4>
                  <p className="text-xs text-gray-400">
                    Latest IEEE events
                  </p>
                </Link>

                <Link to="/explore/gallery" className="hover:text-cyan-400 transition">
                  <h4 className="font-semibold">Gallery</h4>
                  <p className="text-xs text-gray-400">
                    Event moments
                  </p>
                </Link>

                <Link
                  to="/explore/newsletter"
                  className="hover:text-cyan-400 transition col-span-2"
                >
                  <h4 className="font-semibold">Newsletter</h4>
                  <p className="text-xs text-gray-400">
                    Updates & insights
                  </p>
                </Link>

              </div>
            </div>
          </li>

          {/* CONTACT */}
          <li>
            <Link to="/contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* JOIN BUTTON */}
        <Link
          to="/contact"
          className="px-5 py-2 rounded-full border border-cyan-400
                     text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
        >
          Join
        </Link>

      </div>
    </nav>
  );
}

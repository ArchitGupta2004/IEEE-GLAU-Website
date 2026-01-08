import ieeeLogo from "../assets/ieee-logo.png";
import "../styles/Footer.css";
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-card">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3">
            <img src={ieeeLogo} alt="IEEE" className="w-10 h-10" />
            <div>
              <h3 className="font-semibold">IEEE GLAU</h3>
              <p className="text-sm text-gray-400">Student Branch</p>
            </div>
          </div>

          <p className="footer-desc">
            Empowering students to excel in technology and leadership through
            innovation, collaboration, and continuous learning.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">𝕏</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">▶</a>
          </div>
        </div>
        <div>
          <h4 className="footer-title">Explore</h4>
          <a className="footer-link">Newsletter</a>
          <a className="footer-link" href="https://www.ieee.org/">Join IEEE</a>

        </div>

        <div>
          <h4 className="footer-title">Resources</h4>
          <a className="footer-link" href="https://www.ieee.org/">IEEE.org</a>
          <a className="footer-link" href="https://ieeexplore.ieee.org/Xplore/home.jsp">IEEE Xplore</a>
        </div>

        {/* QUICK LINKS */}
        {/* <div>
          <h4 className="footer-title">Quick Links</h4>
          <a className="footer-link">About Us</a>
          <a className="footer-link">Events</a>
          <a className="footer-link">Contact</a>
        </div> */}

        {/* RESOURCES */}
        {/* <div>
          <h4 className="footer-title">Resources</h4>
          <a className="footer-link">IEEE Digital Library</a>
          <a className="footer-link">Student Resources</a>
          <a className="footer-link">Career Center</a>
          <a className="footer-link">Publications</a>
        </div> */}


        {/* CONTACT */}
        <div id="footer-contact">
          <h4 className="footer-title">Contact Us</h4>
          <p className="footer-link">contact@ieeeglau.org</p>
          <p className="footer-link">+91 98765 43210</p>
          <p className="footer-link">
            GLA University <br /> Mathura, UP – 281406
          </p>
        </div>
         {/* <div>
          <h4 className="footer-title">Resources</h4>
          <a className="footer-link" href="https://www.ieee.org/">IEEE.org</a>
          <a className="footer-link" href="https://ieeexplore.ieee.org/Xplore/home.jsp">IEEE Xplore</a>
        </div> */}
        {/* <div>
          <h4 className="footer-title">Explore</h4>
          <a className="footer-link">Newsletter</a>
          <a className="footer-link" href="https://www.ieee.org/">Join IEEE</a>

        </div> */}

      </div>


      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p className="text-white-400 text-sm">
          © 2026 IEEE GLAU Student Branch. All rights reserved.
        </p>

        {/* <div className="flex gap-6 text-sm">
          <a className="footer-link">Privacy Policy</a>
          <a className="footer-link">Terms of Service</a>
          <a className="footer-link">IEEE.org ↗</a>
        </div> */}
      </div>

    </footer>
  );
}
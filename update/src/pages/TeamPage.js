import "../styles/TeamPage.css";
import Navbar from "../components/Navbar";


export default function TeamPage() {
    
  return (
    // <Navbar/>



    <div className="team-page">
        <Navbar/>
      {/* HEADER */}
      <section className="team-hero">
        <h1>
          Meet Our <span>Team</span>
        </h1>
        <p>The dedicated leaders guiding IEEE GLAU towards excellence</p>
      </section>

      {/* FACULTY MENTORS */}
      <section className="team-section">
        <h2>Faculty Mentors</h2>
        <div className="card-grid">
          <div className="team-card purple">
            <div className="avatar">DAS</div>
            <h3>Dr. Ashish Sharma</h3>
            <p className="role">Faculty Advisor</p>
            <p className="sub">Associate Professor</p>
            <p className="contact">ashish.sharma@glau.ac.in</p>
            <p className="contact">+91 98765 43210</p>
            <div className="actions">
              <button>LinkedIn</button>
              <button>Email</button>
            </div>
          </div>

          <div className="team-card teal">
            <div className="avatar">DMG</div>
            <h3>Dr. Munmi Gogoi</h3>
            <p className="role">Co‑Faculty Advisor</p>
            <p className="sub">Assistant Professor</p>
            <p className="contact">munmi.gogoi@glau.ac.in</p>
            <p className="contact">+91 98765 43211</p>
            <div className="actions">
              <button>LinkedIn</button>
              <button>Email</button>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT LEADERSHIP */}
      <section className="team-section">
        <h2>Student Leadership</h2>
        <div className="leader-card">
          <div className="leader-avatar">MPK</div>
          <div className="leader-info">
            <h3>Mr. Priyanshu Kumar</h3>
            <p className="role">President</p>
            <p className="sub">3rd Year, CSE</p>
            <p className="desc">
              Leading IEEE GLAU with a vision to foster innovation and excellence.
              Passionate about AI, robotics, and community building.
            </p>
            <div className="actions">
              <button>Connect</button>
              <button>Email</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

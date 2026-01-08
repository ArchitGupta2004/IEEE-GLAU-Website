import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Team.css";

export default function TeamPage() {

  /* ================= SCROLL REVEAL ================= */
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Navbar />

      <main className="team-page">

        {/* CENTER LINE */}
      

        {/* HEADER */}
        <section className="team-header reveal">
          <h1>
            Meet the <span>Core Team</span>
          </h1>
          <p>
            Our executive council and department heads working together to
            make IEEE GLAU a success.
          </p>
        </section>

        {/* ================= ADVISORS ================= */}
        <TeamSection title="Advisors">
          <TeamCard name="Prashant Kumar" role="Advisor" />
          <TeamCard name="Farrdeen Khan" role="Advisor" />
        </TeamSection>

        {/* ================= EXECUTIVE COUNCIL ================= */}
        <TeamSection title="Executive Council">
          <TeamCard name="Priyanshu Kumar" role="Chairperson" />
          <TeamCard name="Saransh Saxena" role="Vice Chairperson" />
          <TeamCard name="Gargi Sharma" role="General Secretary" />
          <TeamCard name="Tanishq Vashishtha" role="Joint Secretary" />
          <TeamCard name="Shailja Singh" role="Treasurer" />
          <TeamCard name="Bhoomika Agrawal" role="Convener" />
          <TeamCard name="Khush Pandit" role="Co-Convener" />
        </TeamSection>

        {/* ================= Seniar Member ================= */}
        <TeamSection title="Senior Members">
         <TeamCard name="Krishna Agrawal" role="Senior Membern" />
          <TeamCard name="Akshat Kushwaha" role="Senior Member" />
          <TeamCard name="Kritik Pachauri" role="Senior Member" />
          <TeamCard name="Alok Shukla" role="Senior Member" />
          </TeamSection>

        {/* ================= TECHNICAL TEAM ================= */}
        <TeamSection title="Technical Affairs Team">
          <TeamCard name="Archit Gupta" role="Secretary" />
          <TeamCard name="Vansh Gupta" role="Deputy Secretary" />
          <TeamCard name="Sahil Srivastava" role="Associate" />
          <TeamCard name="Raghav Agarwal" role="Member" />
          
        </TeamSection>

      {/* ================= Marketing &PR Team ================= */}
        <TeamSection title="Marketing & PR Team">
          <TeamCard name="Sakshi Sharma" role="Secretary" />
          <TeamCard name="Nandini Kulshestra" role="Deputy Secretary" />
          <TeamCard name="Smriti Saxena" role="Member" />
          <TeamCard name="Devanshi Goyal" role="Member" />

        </TeamSection>

        {/* ================= Corporate Relations TEAM ================= */}
        <TeamSection title="Corporate Relations Team">
          <TeamCard name="Aryan Singh" role="Secretary" />
          <TeamCard name="Riya Raghuvanshi" role="Deputy Secretary" />
          <TeamCard name="Ankita Singh" role="Associate" />
        </TeamSection>

        {/* ================= Event & Hospitality Affairs TEAM ================= */}
        <TeamSection title="Event & Hospitality Affairs Team">
          <TeamCard name="Krishna Singh" role="Secretary" />
          <TeamCard name="Krishna Pandey" role="Deputy Secretary" />
          <TeamCard name="Satyam Singh" role="Associate" />
          <TeamCard name="Nitin Yadav" role="Member" />
          <TeamCard name="Anushka Tripathi" role="Member" />
        </TeamSection>

          {/* ================= Training & Placement Affairs TEAM ================= */}
        <TeamSection title="Training & Placement Affairs Team">
          <TeamCard name="Satvik Chaurasia" role="Secretary" />
          <TeamCard name="Prasann Kumar" role="Deputy Secretary" />
          <TeamCard name="Gagan Verma" role="Member" />
        </TeamSection>

        {/* =================  Design & Creative TEAM ================= */}
        <TeamSection title=" Design & Creative Team">
          <TeamCard name="Samriddhi Pandey" role="Secretary" />
          <TeamCard name="Shourya Porwal" role="Deputy Secretary" />
          <TeamCard name="Ayush Gangwar" role="Associate" />
          <TeamCard name="Deeksha Rajput" role="Member" />
          <TeamCard name="Shreshth Mishra" role="Member" />
        </TeamSection>

      </main>

      <Footer />
    </>
  );
}

/* ================= SECTION ================= */
function TeamSection({ title, children }) {
  return (
    <section className="team-section reveal">
      <div className="section-line"></div>
      <h2>{title}</h2>
      <div className="team-grid">
        {children}
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function TeamCard({ name, role }) {
  return (
    <div className="team-card reveal">

      {/* IMAGE (COMMENTED — UNCOMMENT WHEN AVAILABLE) */}
      {/*
      <img
        src={`/team/${name}.jpg`}
        alt={name}
        className="team-img"
      />
      */}

      {/* TEMP INITIAL AVATAR */}
      <div className="team-avatar">
        {name.split(" ").map(n => n[0]).join("")}
      </div>

      <h3>{name}</h3>
      <p className="role">{role}</p>

      <div className="socials">
        <a href=""><FaLinkedin /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </div>
  );
}

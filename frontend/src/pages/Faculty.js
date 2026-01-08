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
            Meet the <span>Faculty & Advisors</span>
          </h1>
          <p>
           Our faculty mentors and advisor provide constant guidance, academic insight, and leadership support, ensuring IEEE GLAU grows with excellence and integrity.
          </p>
        </section>
        {/* ================= Mentors ================= */}
        <TeamSection title="Mentors">
          <TeamCard name="Dr. Ashiash Sharma" role="Mentor" />
          <TeamCard name="Dr. Munmi Gogoi" role="Mentor" />
        </TeamSection>

        {/* ================= ADVISORS ================= */}
        <TeamSection title="Advisors">
          <TeamCard name="Prashant Kumar" role="Advisor" />
          <TeamCard name="Farrdeen Khan" role="Advisor" />
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
        
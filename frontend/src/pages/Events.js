import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Event.css";

/* ===============================
   EVENT DATA (CONTROL FROM HERE)
================================ */

// 🔴 Upcoming events (0, 1, or many)
const upcomingEvents = [
  {
    id: 1,
    title: "Jail Breaking",
    type: "Competition",
    description:
      "An exciting hacking competition where participants solve security challenges, bypass systems, and demonstrate ethical hacking skills.",
    date: "January 19, 2026",
    time: "2:00 PM – 6:00 PM",
    venue: "Tech Lab, Block A",
    attendees: "150+ participants",
  },
  // 👉 aur upcoming ho to yahin add karo
];

// 🟢 Past events (always visible)
const pastEvents = [
  {
    title: "ISCON – 7th International E-Summit Conference",
    description:
      "A prestigious international summit bringing together researchers and innovators.",
    date: "15–16 September, 2025",
    participants: "500+ participants",
  },
  {
    title: "MODE Mind",
    description:
      "An engaging event focused on creative thinking and problem-solving.",
    date: "12 December, 2025",
    participants: "300+ participants",
  },
];

export default function EventsPage() {
  /* Scroll reveal */
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

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

    reveals.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Navbar />

      <main className="events-page">

        {/* ================= PAGE HEADING ================= */}
        <section className="events-heading reveal">
          <h2>EVENTS</h2>
          <p>Explore upcoming and past events organized by IEEE GLAU</p>
        </section>

        {/* =================================================
            CASE 1: EXACTLY ONE UPCOMING EVENT (BIG CARD)
        ================================================= */}
        {upcomingEvents.length === 1 && (
          <>
            <p className="upcoming-text reveal">Upcoming Event</p>

            <section className="events-grid">
              <div className="event-card reveal">
                <span className="event-badge">
                  {upcomingEvents[0].type}
                </span>

                <h3 className="event-title">
                  {upcomingEvents[0].title}
                </h3>

                <p className="event-desc">
                  {upcomingEvents[0].description}
                </p>

                <ul className="event-details">
                  <li>📅 {upcomingEvents[0].date}</li>
                  <li>⏰ {upcomingEvents[0].time}</li>
                  <li>📍 {upcomingEvents[0].venue}</li>
                  <li>👥 {upcomingEvents[0].attendees}</li>
                </ul>

                <button className="event-btn">
                  Register Now →
                </button>
              </div>
            </section>
          </>
        )}

        {/* =================================================
            CASE 2: MORE THAN ONE UPCOMING (NORMAL CARDS)
        ================================================= */}
        {upcomingEvents.length > 1 && (
          <section className="past-events">
            <h3 className="reveal">Upcoming Events</h3>

            <div className="past-grid">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="past-card reveal">
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>

                  <div className="past-meta">
                    <span>{event.date}</span>
                    <span>{event.attendees}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= PAST EVENTS (ALWAYS) ================= */}
        <section className="past-events">
          <h3 className="reveal">Past Events Highlights</h3>

          <div className="past-grid">
            {pastEvents.map((event, index) => (
              <div key={index} className="past-card reveal">
                <h4>{event.title}</h4>
                <p>{event.description}</p>

                <div className="past-meta">
                  <span>{event.date}</span>
                  <span>{event.participants}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

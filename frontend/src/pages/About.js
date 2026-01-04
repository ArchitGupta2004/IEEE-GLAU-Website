import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";
export default function About() {
  return (
    <>
      <Navbar />

      {/* ================= ABOUT HERO ================= */}
      <section className="hero">

        {/* DOT + LINE BACKGROUND */}
        <div className="pattern">
          <span className="dot top-[16%] left-[20%]" />
          <span className="dot top-[30%] right-[24%]" />
          <span className="dot bottom-[28%] left-[42%]" />

          <span className="line w-[220px] top-[18%] left-[20%] rotate-[10deg]" />
          <span className="line w-[200px] bottom-[30%] right-[28%] -rotate-[14deg]" />
        </div>

        {/* FLOATING INFO CARDS (VIDEO FEEL) */}
        <div className="float-card w-56 left-[6%] top-[30%] p-5">
          <h4 className="font-semibold text-cyan-400">Founded</h4>
          <p className="text-sm text-gray-300 mt-1">IEEE GLAU Student Branch</p>
        </div>

        <div className="float-card w-60 right-[8%] top-[34%] p-5 [animation-delay:2s]">
          <h4 className="font-semibold text-purple-400">Community</h4>
          <p className="text-sm text-gray-300 mt-1">Innovators & Leaders</p>
        </div>

        <div className="float-card w-56 left-[12%] bottom-[26%] p-5 [animation-delay:4s]">
          <h4 className="font-semibold text-cyan-400">Focus</h4>
          <p className="text-sm text-gray-300 mt-1">Technology & Research</p>
        </div>

        {/* HERO CONTENT */}
        <div className="hero-content">

          <div className="hero-badge mx-auto">
            ✦ About IEEE GLAU
          </div>

          <h1 className="hero-title">
            Building a <span className="gradient-text">Future</span><br />
            Through Technology
          </h1>

          <p className="hero-desc">
            IEEE GLA University Student Branch is a dynamic technical
            community dedicated to innovation, learning, leadership,
            and real-world impact.
          </p>

        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-14">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur
                        hover:border-cyan-400/40 transition">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To empower students with technical knowledge, leadership
            skills, and innovation opportunities that prepare them
            for global challenges.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur
                        hover:border-purple-400/40 transition">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To be a leading student chapter that fosters excellence,
            ethical innovation, and impactful research.
          </p>
        </div>

      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-36">

        <h2 className="text-3xl font-bold text-center mb-16">
          Our <span className="gradient-text">Core Values</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {[
            { title: "Innovation", desc: "Creative thinking & problem solving" },
            { title: "Excellence", desc: "Continuous improvement mindset" },
            { title: "Collaboration", desc: "Strong teamwork culture" },
            { title: "Integrity", desc: "Ethical & responsible actions" }
          ].map((item, i) => (
            <div
              key={i}
              className="stat-card hover:scale-[1.03] transition-transform"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </>
  );
}

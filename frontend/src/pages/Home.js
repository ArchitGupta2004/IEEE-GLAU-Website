import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import "../styles/About.css";

import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="hero">

        {/* DOT + LINE PATTERN */}
        <div className="pattern">
          <span className="dot top-[18%] left-[22%]" />
          <span className="dot top-[32%] right-[20%]" />
          <span className="dot bottom-[28%] left-[42%]" />

          <span className="line w-[220px] top-[20%] left-[22%] rotate-[12deg]" />
          <span className="line w-[180px] bottom-[30%] right-[28%] -rotate-[18deg]" />
        </div>

        {/* FLOATING IMAGES */}
        <img src={img1} className="float-img w-40 left-[6%] top-[22%]" alt="" />
        <img src={img2} className="float-img w-44 right-[8%] top-[28%] [animation-delay:2s]" alt="" />
        <img src={img3} className="float-img w-36 left-[14%] bottom-[20%] [animation-delay:4s]" alt="" />
        <img src={img4} className="float-img w-36 right-[16%] bottom-[24%] [animation-delay:6s]" alt="" />

        {/* HERO CONTENT */}
        <div className="hero-content">
          <div className="hero-badge mx-auto">
            ✦ Empowering Innovation Since 2024
          </div>

          <h1 className="hero-title">
            Pioneering Technology <br />
            <span className="gradient-text">Shaping Tomorrow</span>
          </h1>

          <p className="hero-desc">
            Join a community of innovators, researchers, and leaders
            dedicated to advancing technology at GLA University.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <button className="btn-secondary">Get Involved →</button>
            <button className="btn-primary">Explore Events</button>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Members</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Events</p>
            </div>
            <div className="stat-card">
              <h3 className="gradient-text">15+</h3>
              <p>Awards</p>
            </div>
            <div className="stat-card">
              <h3>20+</h3>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </section>

       <section className="about-section">
        <div className="container">
          <h1 className="about-title">About IEEE GLAU</h1>
          <p className="about-subtitle">
            Empowering students to excel in technology and leadership
          </p>

          <div className="about-main">
            {/* Mission */}
            <div className="about-mission">
              <h2>Our Mission</h2>
              <p>
                IEEE GLAU Student Branch is dedicated to advancing technology for
                the benefit of humanity. We provide a platform for students to
                explore, innovate, and collaborate on cutting-edge projects that
                shape the future of engineering and technology.
              </p>
              <p>
                Through technical workshops, competitive events, research
                initiatives, and industry interactions, we nurture the next
                generation of innovators and leaders. Our community thrives on
                curiosity, collaboration, and the pursuit of excellence.
              </p>
              <button className="btn">Get Involved</button>
            </div>

            {/* Vision */}
            <div className="about-vision">
              <h2>Our Vision</h2>
              <p>
                To be the premier hub for technological innovation and
                professional development at GLA University, inspiring students
                to make meaningful contributions to society through engineering
                excellence.
              </p>

              <h3>What We Do</h3>
              <ul>
                <li>Organize technical workshops and seminars</li>
                <li>Conduct hackathons and competitions</li>
                <li>Facilitate industry mentorship programs</li>
                <li>Support research and innovation projects</li>
              </ul>
            </div>
          </div>

          {/* Core Values */}
          <div className="core-values">
            <h2>Our Core Values</h2>

            <div className="values-cards">
              <div className="card">
                <h3>Innovation</h3>
                <p>
                  Driving cutting-edge technological advancements and fostering
                  creative problem-solving.
                </p>
              </div>

              <div className="card">
                <h3>Learning</h3>
                <p>
                  Continuous skill development through workshops, seminars, and
                  hands-on projects.
                </p>
              </div>

              <div className="card">
                <h3>Community</h3>
                <p>
                  Building a supportive network of passionate engineers and
                  technology enthusiasts.
                </p>
              </div>

              <div className="card">
                <h3>Excellence</h3>
                <p>
                  Striving for the highest standards in all technical and
                  professional endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

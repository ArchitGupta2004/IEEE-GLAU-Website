import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      

      <section className="hero">

        {/* DOT + LINE PATTERN */}
        <div className="pattern">
          <span className="dot top-[18%] left-[22%]" />
          <span className="dot top-[32%] right-[20%]" />
          <span className="dot bottom-[28%] left-[42%]" />

          <span className="line w-[220px] top-[20%] left-[22%] rotate-[12deg]" />
          <span className="line w-[180px] bottom-[30%] right-[28%] -rotate-[18deg]" />
        </div>

        {/* FLOATING IMAGES (4) */}
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
            dedicated to advancing technology and fostering excellence
            in engineering at GLA University.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <button className="btn-secondary">Get Involved →</button>
            <button className="btn-primary">Explore Events</button>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-400 mt-1">Members</p>
            </div>
            <div className="stat-card">
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-gray-400 mt-1">Events</p>
            </div>
            <div className="stat-card">
              <h3 className="text-3xl font-bold gradient-text">15+</h3>
              <p className="text-gray-400 mt-1">Awards</p>
            </div>
            <div className="stat-card">
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-gray-400 mt-1">Projects</p>
            </div>
          </div>

        </div>

      </section>
      <Footer />
    </>
    
  );
}

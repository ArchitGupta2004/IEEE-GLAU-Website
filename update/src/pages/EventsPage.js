import React from "react";
import Navbar from "../components/Navbar";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0220] via-[#1a0b3d] to-[#2b0a55] text-white p-10">
    <Navbar/>

    <br></br>
    <br></br>
    <br></br>
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold">
          Upcoming <span className="text-pink-400">Events</span>
        </h2>
        <p className="text-gray-300 mt-2">
          Join us in our exciting events, workshops, and competitions
        </p>
      </section>


      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">


        <div className="md:col-span-1 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl p-6 shadow-xl">
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Competition</span>
          <h3 className="text-2xl font-bold mt-4">Jail Breaking</h3>
          <p className="text-sm text-gray-100 mt-3">
            An exciting hacking competition where participants solve security
            challenges, bypass systems, and demonstrate ethical hacking skills.
          </p>

          <ul className="text-sm mt-4 space-y-1 text-gray-200">
            <li>📅 January 19, 2026</li>
            <li>⏰ 2:00 PM – 6:00 PM</li>
            <li>📍 Tech Lab, Block A</li>
            <li>👥 150 Expected Attendees</li>
          </ul>

          <button className="mt-6 w-full bg-white text-purple-700 font-semibold py-2 rounded-xl hover:bg-gray-100">
            Register Now →
          </button>
        </div>
      </section>


      <section>
        <h3 className="text-center text-xl font-semibold mb-8 text-gray-200">
          Past Events Highlights
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6">
            <h4 className="font-semibold">ISCON – 7th International E-Summit Conference</h4>
            <p className="text-sm text-gray-300 mt-2">
              A prestigious international summit bringing together researchers
              and innovators.
            </p>
            <div className="flex justify-between text-xs text-gray-400 mt-4">
              <span>15–16 September, 2025</span>
              <span>500+ participants</span>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <h4 className="font-semibold">MODE Mind</h4>
            <p className="text-sm text-gray-300 mt-2">
              An engaging event focused on creative thinking and problem-solving.
            </p>
            <div className="flex justify-between text-xs text-gray-400 mt-4">
              <span>12 December, 2025</span>
              <span>300+ participants</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

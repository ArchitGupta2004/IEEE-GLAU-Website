import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import About from "./pages/About";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore/events" element={<EventsPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

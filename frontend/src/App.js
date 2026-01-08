import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Faculty from "./pages/Faculty";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/events" element={<Events />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/faculty" element={<Faculty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

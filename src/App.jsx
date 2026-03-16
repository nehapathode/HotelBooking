 import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Front from "./Component/Front";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Rooms from "./Pages/Rooms";
import Login from "./Pages/Login";
import Hotel from "./Pages/Hotel";
import Lobby from "./Pages/Lobby";
import Room from "./Pages/Room";      




function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Hotel" element={<Hotel />} />
          <Route path="/Lobby" element={<Lobby />} />
          <Route path="/Room" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;

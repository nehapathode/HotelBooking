import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Front from "./Component/Front";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Rooms from "./Pages/Rooms";
import Login from "./Pages/Login";
import Frontimg from "./Pages/Frontimg";
     




import Signup from "./Pages/Signup";

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
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Frontimg" element={<Frontimg />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}



export default App;

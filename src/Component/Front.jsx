import grandhotel from "../Images/grandhotel.jpg";
import Hotel from "../Images/Hotel.jpg";
import lobby from "../Images/lobby.jpg";

import room from "../Images/room.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
     <div className="h-[150vh] w-screen bg-linear-to-r from-[#b2e6e7] to-[#B5C6E0] flex flex-col items-center">
        <div className="h-[10vh] w-[50%] mt-32 flex justify-center items-center text-5xl font-bold text-white">
          Find Your Perfect Room
        </div>
        <div className="h-9 w-[27%] flex justify-center items-center text-2xl text-white">
          Book Your Stay With Us
        </div>
        <div className="h-10 w-[50%]  mt-8 text-black flex justify-center font-bold items-center text-3xl">
          OUR ROOMS
        </div>
        <div className="h-[70vh] w-[90vw]  mt-10 flex justify-around items-center gap-3">
          <div className="h-[60vh] w-[25vw] bg-gray-300">
            <Link to="/Hotel">
              {" "}
              <img
                src={Hotel}
                alt="Hotel"
                className="h-full w-full object-cover border-2 border-white bg-blue-200 text-white px-1 py-1 hover:bg-white rounded-[5px]"
              />{" "}
            </Link>
          </div>

          <div className="h-[60vh] w-[25vw] bg-gray-300">
            <Link to="/Lobby">
              {" "}
              <img
                src={lobby}
                alt="Lobby"
                className="h-full w-full object-cover border-2 border-white bg-blue-200 text-white px-1 py-1 hover:bg-white rounded-[5px]"
              />{" "}
            </Link>
          </div>
          <div className="h-[60vh] w-[25vw] bg-gray-300">
            <Link to="/Room">
              {" "}
              <img
                src={room}
                alt="Room"
                className="h-full w-full object-cover border-2 border-white bg-blue-200 text-white px-1 py-1 hover:bg-white rounded-[5px]"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="h-5 w-screen  bg-cyan-200 text-[15px] flex justify-center items-center">
        {" "}
        © 2026 The Indian Hotels Company Limited. All Rights Reserved.{" "}
      </div>
    </div>
  );
}

export default Home;

import frontimg from "../Images/frontimg.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Home() {

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="h-[150vh] w-screen bg-white flex flex-col items-center">

        <div className="h-[10vh] w-[50%] mt-32 flex justify-center items-center text-5xl font-bold text-black">
          Find Your Perfect Room
        </div>

        <div className="h-9 w-[27%] flex justify-center items-center text-2xl text-black">
          Book Your Stay With Us
        </div>

        <div className="h-10 w-[50%] mt-8 text-black flex justify-center font-bold items-center text-3xl">
          Book Now
        </div>

       
        <div className="mt-10 flex flex-col items-center">
          
          <p className="text-lg font-semibold mb-2">Search Hotel Here</p>

          <input
            type="text"
            placeholder="Enter hotel name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-15 w-60  border border-gray-300 rounded-md outline-none bg-[#C4E3E3]  shadow-md"
          />

        </div>

        <div className="flex gap-4 mt-20">

       
          <div className="bg-[linear-gradient(178deg,#5BB1B3_46%,#ffffff_100%)] p-3 rounded-md w-60">
            <p className="text-gray-600 text-sm">Check-in</p>
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              placeholderText="Select date"
              className="bg-transparent outline-none text-lg"
            />
          </div>

       
          <div className="bg-[linear-gradient(1deg,#5BB1B3_46%,#ffffff_100%)] p-3 rounded-md w-60">
            <p className="text-gray-600 text-sm">Check-out</p>
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              placeholderText="Select date"
              className="bg-transparent outline-none text-lg"
            />
          </div>

        </div>

    
        <div className="h-[70vh] w-[60%] bg-amber-200 mt-30">
          <Link to="/Frontimg">
            <img
              src={frontimg}
              alt="frontimg"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </Link>
        </div>

     
        <div className="h-5 w-screen text-[15px] flex justify-center items-center mt-80">
          © 2026 The Indian Hotels Company Limited. All Rights Reserved.
        </div>

      </div>
    </div>
  );
}

export default Home;
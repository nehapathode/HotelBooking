import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="h-20 w-full bg-linear-to-r from-[#6DB9BB] via-[#56AEB0] to-[#3E9EA3] flex justify-between fixed items-center">
        <div className="h-20 w-[25%] text-2xl text-amber-50 flex justify-center items-center font-bold">
          <FaMapMarkerAlt className="h-10 w-15 text-amber-300" />
          Hotel Booking
        </div>

        <div className="h-20 w-[60%]  flex justify-around items-center text-2xl text-amber-50 cursor-pointer">
          <ul className="flex gap-19 p-5 items-center justify-center ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Rooms">Rooms</Link>
            </li>
            <li className="border h-12 w-28 rounded-2xl justify-center items-center flex">
              <Link to="/Login">Login</Link>
            </li>

          </ul>

        </div>
      </div>
      
    </>
  );
}

export default Navbar;

import room1 from "../Images/room1.jpg";
import room2 from "../Images/room2.jpg";
import Luxurious from "../Images/Luxurious.jpg";
import Family from "../Images/Family.jpg";

function Hotel() {
  return (
    <div>
      <div className="h-30 w-screen "></div>
      <div className="h-screen w-screen ">
        <div className="h-[50%] w-screen  flex ">
          <div className="h-full w-[50%]  flex items-center justify-center">
            <div className="h-[50vh] w-[50%] ">
              <img
                src={room1}
                alt="room1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[40vh] w-[40%] bg-white ">
              <div className="h-10 w-full ">
                {" "}
                <p className="text-2xl font-bold text-gray-800 flex items-center justify-center">
                  Deluxe Room
                </p>
              </div>
              <div className="h-24 w-full flex items-center justify-center">
                {" "}
                <p className="text-gray-600 mt-2 flex items-center justify-center ml-5">
                  Experience luxury and comfort in our Deluxe Room, featuring
                  elegant decor, modern amenities, and a cozy ambiance for a
                  memorable stay.
                </p>
              </div>

              <div className="h-15 w-full  items-center justify-center flex">
                {" "}
                From $199/night
              </div>
              <div className="h-11 w-[50%]   items-center justify-center flex mt-7 ml-23">
                <div className="h-10 w-[90%] rounded-[10px] bg-[linear-gradient(99deg,#5BB1B3_46%,#ffffff_100%)] items-center justify-center flex cursor-pointer">
                  View Details
                </div>
              </div>
            </div>
          </div>

          <div className="h-full w-[50%]  flex justify-center items-center">
            <div className="h-[50vh] w-[50%] ">
              <img
                src={room2}
                alt="room2"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[40vh] w-[40%] bg-white ">
              <div className="h-10 w-full ">
                {" "}
                <p className="text-2xl font-bold text-gray-800 flex items-center justify-center">
                  Single Room
                </p>
              </div>
              <div className="h-24 w-full flex items-center justify-center">
                {" "}
                <p className="text-gray-600 mt-2 flex items-center justify-center ml-5">
                  Enjoy a comfortable stay in our Single Room, designed for a
                  perfect balance of functionality and comfort.
                </p>
              </div>

              <div className="h-15 w-full  items-center justify-center flex">
                {" "}
                From $150/night
              </div>
              <div className="h-11 w-[50%]   items-center justify-center flex mt-7 ml-23">
                <div className="h-10 w-[90%] rounded-[10px] bg-[linear-gradient(99deg,#5BB1B3_46%,#ffffff_100%)] items-center justify-center flex cursor-pointer">
                  View Details
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[50%] w[50%]  mt-40">
          <div className="h-[50%] w-screen  flex ">
          <div className="h-full w-[50%]  flex items-center justify-center">
            <div className="h-[50vh] w-[50%] ">
              <img
                src={Luxurious}
                alt="Luxurious"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[40vh] w-[40%] bg-white ">
              <div className="h-10 w-full ">
                
                <p className="text-2xl font-bold text-gray-800 flex items-center justify-center">
                  Luxurious  Room
                </p>
              </div>
              <div className="h-24 w-full flex items-center justify-center">
                {" "}
                <p className="text-gray-600  flex items-center justify-center mt-9 ml-5">
                  Indulge in the epitome of luxury with our Luxurious Room,
                  offering opulent furnishings, premium amenities, and an
                  unforgettable experience for discerning travelers.
                </p>
              </div>

              <div className="h-15 w-full  items-center justify-center flex mt-11">
                {" "}
                From $599/night
              </div>
              <div className="h-11 w-[50%]   items-center justify-center flex mt-7 ml-23">
                <div className="h-10 w-[90%] rounded-[10px] bg-[linear-gradient(99deg,#5BB1B3_46%,#ffffff_100%)] items-center justify-center flex cursor-pointer">
                  View Details
                </div>
              </div>
            </div>
          </div>

          <div className="h-full w-[50%]  flex justify-center items-center">
            <div className="h-[50vh] w-[50%] ">
              <img
                src={Family}
                alt="Family"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[40vh] w-[40%] bg-white ">
              <div className="h-10 w-full ">
                {" "}
                <p className="text-2xl font-bold text-gray-800 flex items-center justify-center">
                  Family Room
                </p>
              </div>
              <div className="h-24 w-full flex items-center justify-center">
                {" "}
                <p className="text-gray-600  flex items-center justify-center ml-5 mt-13">
                  Our Family Room is designed to provide a spacious and comfortable stay for families, featuring ample space, modern amenities, and a welcoming atmosphere for a memorable family getaway.  
                </p>
              </div>

              <div className="h-15 w-full  items-center justify-center mt-10 flex">
                {" "}
                From $250/night
              </div>
              <div className="h-11 w-[50%]   items-center justify-center flex mt-7 ml-23">
                <div className="h-10 w-[90%] rounded-[10px] bg-[linear-gradient(99deg,#5BB1B3_46%,#ffffff_100%)] items-center justify-center flex cursor-pointer">
                  View Details
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;

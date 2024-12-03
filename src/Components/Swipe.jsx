import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function Swipe() {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative w-full h-full bg-zinc-500 rounded-lg flex overflow-hidden">
        <img
          className={`shrink-0 transition-transform duration-1000 ease-in-out ${
            val == false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1731947463347-a6b36e97fe9d?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`shrink-0 transition-transform duration-1000 ease-in-out ${
            val == false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1731432248952-5003b9ffbbd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
          alt=""
        />

        <span
          onClick={() => setVal(() => !val)}
          className="w-9 h-9 bg-[#dadada8b] flex items-center justify-center rounded-full absolute bottom-[0%] top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]"
        >
          <FaArrowRightLong size={".7em"} />
        </span>
      </div>
    </div>
  );
}
export default Swipe;

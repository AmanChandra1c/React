import React from 'react';
function Props({values, handleClick, index}){
    const {name, profession, image, friends} = values;
    return (
      <>
        <div className="w-52 bg-white overflow-hidden rounded-md">
          <div className="w-full h-52 bg-sky-400 overflow-hidden">
            <img
              className="w-full h-full object-cover object-[center_top]"
              src={image}
              alt=""
            />
          </div>
          <div className="w-full p-3">
            <h2 className="text-xl font-semibold ">{name}</h2>
            <h5 className="text-md m-y">{profession}</h5>
            <button
              onClick={() => handleClick(index)}
              className={`px-3 py-2 text-xs text-white ${friends === true ? "bg-green-500" : "bg-blue-500"} font-semibold rounded-md mt-1`}
            >
              {friends === true ? "Remove" : "Add Friend"}
            </button>
          </div>
        </div>
      </>
    );
}
export default Props;
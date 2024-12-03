import React from 'react';
function Event(){

    const data = [
        {name : "Mahiya Ve", Description : "Mahiya na aaya mera mahiya na aaya"},
        {name : "O Mahi O Mahi", Description : "O mahi o mahi o mahi mahi o mahi"},
        {name : "Manjha", Description : "E manjha tera ki pakad ke bhage re "}
    ]
    const handleClickEvent = ()=>{alert("Hey")};

    return (
      <>
        <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center">
          {data.map((val, index) => (
            <div className="w-80 px-3 py-2 rounded-md bg-zinc-100">
              <h3 className="font-semibold text-xl">{val.name}</h3>
              <p className="text-sm mt-2">{val.Description}</p>
              <button onMouseOver={handleClickEvent} className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3">
                Download Now
              </button>
            </div>
          ))}
        </div>
      </>
    );
}
export default Event
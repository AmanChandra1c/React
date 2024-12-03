import React from "react";

function Card() {

  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1731346701303-6ce8b536bd44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D-XZZF3rY",
      name: "Amazon",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      instock: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1724782700901-b0e4e909b1f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      name: "Daily Objects",
      description: "sit amet consectetur adipisicing elit Lorem ipsum, dolor",
      instock: false
    },
    {
      image:
        "https://images.unsplash.com/photo-1605457212895-83c6706d6dd8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      description: "adipisicing elit Lorem ipsum, dolor sit amet consectetur",
      instock: true
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-40 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4 bg-zinc-100">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text mt-3">{elem.description}</p>
            <button className={`px-4 rounded py-1 ${elem.instock ? 'bg-blue-500' : 'bg-red-500'} text-zinc-100 mt-3`}>
              {elem.instock ? "In Stock" : "Out Of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

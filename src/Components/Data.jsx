import React, { useState } from 'react';
import Props from './Props';
function Data(){

  const data = [
    {
      name: "John",
      profession: "painter",
      image:
        "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Meal",
      profession: "Coder",
      image:
        "https://images.unsplash.com/photo-1603519500801-f09a82feddf7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Mrunal",
      profession: "Actor",
      image:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Mania",
      profession: "Artist",
      image:
        "https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];
  const [realdata, setRealdata] = useState(data);
    const handleFriendsButton = (propsindex)=>{
      setRealdata((prev)=>{
       return prev.map((item, index)=>{
          if(index === propsindex){
            return {...item, friends :  !item.friends}
          }
          return item;
        })
      })
    }

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4  items-center justify-center">
        {realdata.map((item, index) => (
          <Props key={index} index={index} handleClick={handleFriendsButton} values={item} />
        ))}
      </div>
    </>
  );
}
export default Data;      
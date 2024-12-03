import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import SongCard from './Components/SongCard';
function App(){

const data = [
    {image: "https://images.unsplash.com/photo-1731437519637-747bb78a0217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D", name: "Deep Forest", artist: "White Whisper", added: false},
    {image: "https://images.unsplash.com/photo-1732282537685-bec9036bf4e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D", name: "Awaara Dogs", artist: "Vishal Dadlani", added: false},
    {image: "https://images.unsplash.com/photo-1731433485113-11b5939894f1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzN8fHxlbnwwfHx8fHw%3D", name: "Shallow", artist: "Lady Gaga", added: false},
    {image: "https://images.unsplash.com/photo-1726141123623-ab974a5c9bd0?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzh8fHxlbnwwfHx8fHw%3D", name: "Someone Like You", artist: " Adele", added: false},
    {image: "https://images.unsplash.com/photo-1599457382197-820d65b8bbdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8fDA%3D", name: "Stay", artist: "Justin Bieber", added: false},
    {image: "https://plus.unsplash.com/premium_photo-1684953584873-322e113cd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJveXN8ZW58MHx8MHx8fDA%3D", name: "Bad Habits", artist: "Ed Sheeran", added: false},
    {image: "https://images.unsplash.com/photo-1591006629164-a650752c5c26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1dGUlMjBob3QlMjBnaXJsfGVufDB8fDB8fHww", name: "Happier Than Ever", artist: "Billie Eilish", added: false},
];
const [songdata,setSongdata] = useState(data);
const handleCard = ( clickCard) =>{
  setSongdata((prev) =>{
    return prev.map((item, index)=>{ 
      if(index === clickCard){
        return {...item, added: !item.added};
      }
      return item
    })
  })
}
    return(
        <>
        <div className='bg-zinc-200 w-full h-screen'>
          <Navbar data={songdata}/>
          <div className='px-20 flex items-start gap-10 mt-10 flex-wrap'>
            {songdata.map((item,index)=>(
                <SongCard item={item} key={index} index={index} handlebutton={handleCard} />
            ))}
          </div>
          </div>
        </>
     )
}
export default App;
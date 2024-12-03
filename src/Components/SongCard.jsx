import React from 'react';
function SongCard({item, index, handlebutton}){
    const {image, name,artist,added} = item;
    return(
        <>
            <div className='w-60 bg-white p-4 rounded-md flex gap-4 pb-8 mt-8 relative'>
                <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
                    <img className='object-cover' src={image} alt="" />
                </div>
                <div >
                    <h3 className='text-xl font-semibold leading-none'>{name}</h3>
                    <h6 className='text-sm font-semibold mt-2'>{artist}</h6>
                </div>
                <button onClick={()=>handlebutton(index)} className={`px-5 py-2 whitespace-nowrap ${added === true ? "bg-teal-600" : "bg-orange-600"} absolute bottom-0 translate-y-[50%] -translate-x-[50%] left-1/2 text-white text-xs rounded-full`} >{added === true ? "Remove" : "Add to Cart"}</button>
            </div>
        </>
     )
}
export default SongCard;
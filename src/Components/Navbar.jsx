import React from 'react';
function Navbar({data}){
    return(
        <>
           <div className='px-20 py-3 w-full flex justify-between items-center'>
                <h3>Orange</h3>
                <div className='flex bg-orange-600 rounded-md px-4 py-2 text-sm text-white gap-3'>
                    <h3>Favourites</h3>
                    <h4>{data.filter(item=> item.added).length}</h4>
                </div>
           </div>
        </>
     )
}
export default Navbar;
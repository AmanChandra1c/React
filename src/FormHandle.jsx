import React, { useRef } from 'react';
function FormHandle(){
    const elem = useRef(null);
    const age = useRef(null);
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(elem.current.value , age.current.value)
    }
    return(
        <>
            <form className='flex items-center flex-col gap-10 p-20' action="" onSubmit={handleSubmit}>
                <input ref={elem} type="text" name="" id="" placeholder='Enter Name' />
                <input ref={age} type="number" name="" id="" placeholder='Enter Age' />
                <input type="submit" name="" id="" />
            </form>
        </>
     )
}
export default FormHandle;
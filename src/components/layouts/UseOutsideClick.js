import React from "react";
import { useEffect, useState } from "react";
function UseOutsideClick(el,initialState){
    const [ isActive,setIsActive] = useState(initialState)

    useEffect(()=>{
        const onClick = e =>{
            if (el.current !== null && !el.current.contains(e.target)){
                setIsActive(!isActive)
            }
        }
        if(isActive){
            window.addEventListener('click', onclick)
        }
        return()=>{
            window.removeEventListener('click', onclick)
        }
    },[isActive,el])
    return [isActive, setIsActive]
}
export default UseOutsideClick;
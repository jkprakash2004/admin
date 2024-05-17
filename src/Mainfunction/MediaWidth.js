import React, { useEffect, useState } from 'react'

const MediaWidth = () => {
    const [windowSize,setWindowSize]=useState({width:0,height:0})
    console.log(windowSize);
    console.log(window.innerWidth);
    useEffect(()=>{
        const handleSize=()=>{
            setWindowSize(
                {width:window.innerWidth,
                height:window.innerHeight
                }
                
            )
            handleSize();
            window.addEventListener("resize",handleSize);
            
        }
    },[])
    return windowSize;
 
} 
export default MediaWidth
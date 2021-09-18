import React,{useEffect, useState,useState} from "react";
const useEffectCleapUp=()=>{
    const [size,setSize]=unState(window.innerWidth)
    useEffect(()=>{
        console.log('sda')
        window.addEventListener('resize',checkSize)

    })
    return(
        <>
            <h1>
                window
            </h1>
            <h2>{size} px</h2>
        </>
    )
}
export default useEffectCleapUp
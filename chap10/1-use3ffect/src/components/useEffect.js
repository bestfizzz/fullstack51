import React,{useState,useEffect} from "react";
const useEffectBasics=()=>{
    const [value,setValue]=useState(0)
    useEffect(()=>{
        console.log('call uuse effect')
        if(value>0){
            document.title=`new message ${value}`
        }
    })
    console.log('render component')
    return(
        <>
            <h1>
                {value}
            </h1>
            <button className={'btn'} onClick></button>
        </>
    )
}
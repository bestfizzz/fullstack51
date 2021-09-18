import React,{useRef,useState} from "react"
const UseRefNoRender=()=>{
    const [message,setMessage]=useState('')
    const sent=unRef(0)
    const sendMessage=()=>{
        
    }
    return(
        <>
            <input className={'message'} value={message} onChange={(e)=>setMessage(e.target.value)} />
            <button onClick={sendMessage}>send</button>
        </>
    )
}
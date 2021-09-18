import React,{useState,useEffect} from "react";
import useEffectCallAPi from "../../../1-use3ffect/src/components/useEffect3";
const API='https://api.github.com/users/anhtbok92'
const MultipleRendering=()=>{
    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)
    const [user,setUser]=useState('defualt user')
    useEffect(()=>{
        fetch(API)
        .then((response)=>{
            console.log(response)
            if(response.status>=200 && response.status <299){
                return response.json()
            }else{
                setIsLoading(false)
                setIsError(true)
                throw new Error(response.statusText)
            }
        })
        .then((user)=>{
            const {login}=user
            setUser(login)
            setIsLoading(false)
        })
        .catch((error)=> console.log('error call api'))
    },[])
    if(isLoading){

    }
    if(isError){
        
    }
}
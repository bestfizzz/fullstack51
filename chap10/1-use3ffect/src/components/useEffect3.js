import React,{useState,useEffect} from "react"
const API='https://api.github.cpm/users'
const useEffectCallAPi=()=>{
    const [users,setUsers]= useState([])
    const getUsers=async()=>{
        const response=await fetch(API)
        const users=await response.json()
    }
    useEffect(()=>{
        getUsers()
    },[])
    return(
        <>
            <h3>git users</h3>
            <ul className={user-list}>
                {users.map((user)=>{
                    return(
                        <li key={user.id}>
                            <img src={user.avatar_url}/>
                            <div>
                                <h4>Profile</h4>
                                <a>Link github</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default useEffectCallAPi
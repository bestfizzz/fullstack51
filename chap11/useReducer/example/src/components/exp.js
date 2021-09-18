import React,{ useReducer,useState } from "react"
import { reducer } from "./reducer"
const counterReducer=(state,action)=>{
    console.log('state',state)
    console.log('action',action)
    switch(action.type){
        case 'increase':
            return{
                ...state,
                counter:state.counter+1
        }
        case 'decrease':
            return{
                ...state,
                counter:state.counter-1
            }
        default:
            throw new Error()
    }
}
const CounterWithReducer=()=>{
    const [state,dispatch]=useReducer(counterReducer,{counter:0})
    const handleClickIncrease=()=>{
        dispatch({type:'increase'})
    }
    const handleClickDecrease=()=>{
        dispatch({type:'decrease'})
    }
    return(
        <>
            <div className={'counter'}>
                <h1>{state.counter}</h1>
            </div>
            <div>
                <button onClick={handleClickIncrease}>tang</button>
                <button onClick={handleClickDecrease}>giam</button>
            </div>
        </>
    )
}
export default CounterWithReducer
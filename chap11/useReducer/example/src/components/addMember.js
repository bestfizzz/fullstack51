import { useReducer, useState } from "react"
const defaultState=[
    
]
const AddMemberWithReducer=()=>{
    const [name,setName]=useState('')
    const [state,dispatch]
    return(
        <>
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <button type='submit'>add member</button>
            </form>
            {state.members.map(()=>{
                return(
                    <div key={member.id}>

                    </div>
                )
            })}
        </>
    )
}
export default AddMemberWithReducer
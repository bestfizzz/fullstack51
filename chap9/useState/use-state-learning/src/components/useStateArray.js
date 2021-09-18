import React, { useState } from 'react'
import {data} from '../../people'
const useStateArray=()=>{
    const [people,setPeople]=useState(data)
    return(
        <React.Fragment>
            {
                people.map((person)=>{
                    const {id,name}=person
                    return(
                        <div key={id} className={'item'}>
                            <h4>{name}</h4>
                            <button onClick={()=>removePeople(id)}>>remove</button>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}
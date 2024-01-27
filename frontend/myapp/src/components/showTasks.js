import { useState } from 'react';
import Card from './card'
const ShowTasks = ()=>{

    const [tasks, setTasks]= useState([])

    const getTasks = ()=>{
        fetch('http://localhost:8001/getTasks').then(res=>res.json()).then(res=>setTasks(res.allTasks))
    }



    return (
        <div style={{padding:'2rem'}}>

            <button onClick={()=>getTasks()}>fetch</button>

            {
                tasks.length>0 ? tasks.map(elem=>{
                    return(<Card elem={elem}/>)
                }):''
            }
            
           
        </div>
    )
}

export default ShowTasks;
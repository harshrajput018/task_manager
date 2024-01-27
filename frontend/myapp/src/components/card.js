import { useEffect, useState } from "react"

const Card = (props) => {

    const [update, change]= useState(0)

    const toggleComplete = ()=>{

        fetch('http://localhost:8001/updateTask',{
            method:'post',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                id:props.elem._id
            })

        }).then(()=>{
            document.getElementById('tit').innerHTML=``
        })

    }

    const updatetord = ()=>{
        fetch('http://localhost:8001/updateTask/titleOrDescription',{
            method:'post',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                id:props.elem._id,
                title:document.getElementById(`${props.elem._id}title`).value,
                description:document.getElementById(`${props.elem._id}description`).value,
                
            })

        }).then(()=>{
            document.getElementById('')
        })

    }

    useEffect(()=>{
        document.getElementById(`checkbox+${props.elem._id}`).checked = props.elem.checked
    })

    const deleteTask = ()=>{

        fetch('http://localhost:8001/deleteTask',{
            method:'post',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                id:props.elem._id,
                
                
            })

        })

    }


    return (
        <div style={{ boxShadow: '1px 1px 1px 1px grey', width: '300px',  padding: '0.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', overflow: 'scroll', }}>
            <div id="tit" style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div id={`title+${props.elem._id}`} style={{ fontSize: '0.75rem', color: 'teal', fontWeight: '700' }} className="Title">{props.elem.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'grey', cursor: 'pointer' }} className="edit fa" onMouseEnter={e => {
                    e.target.style.color = 'black'
                }}
                    onMouseLeave={e => {
                        e.target.style.color = 'grey'
                    }}
                    onClick={() => {
                        document.getElementById(`title+${props.elem._id}`).innerHTML = `<input type="text" name="" id="${props.elem._id}title" value="${props.elem.title}" />`
                        document.getElementById(`description+${props.elem._id}`).innerHTML =`<textarea id="${props.elem._id}description" rows="4" type="text" name="">${props.elem.description}</textarea>`

                        document.getElementsByClassName(`save${props.elem._id}`)[0].style.display='block'
                        document.getElementsByClassName(`save${props.elem._id}`)[1].style.display='block'
                    }}
                >&#xf044;</div>
            </div>

            <div id="dis" style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
                <div id={`description+${props.elem._id}`} style={{ fontSize: '0.75rem', }} className="Description">{props.elem.description}</div>

            </div>


            <div className="checkBox">
                <input type="checkbox" name="" id={`checkbox+${props.elem._id}`} onClick={()=>toggleComplete()} />
            </div>

            <div id="save" style={{ display:'none',backgroundColor:'teal', color:'white', fontWeight:'600', width:'fit-content', fontSize:'0.75rem', padding:'0.25rem 0.5rem'}} className={`save${props.elem._id}`} onClick={()=>updatetord()}>
                save
            </div>
            <div
            
            onClick={()=>{
                document.getElementById(`dis${props.elem._id}`).innerHTML =`${props.elem.description}`
                document.getElementById(`tit${props.elem._id}`).innerHTML = `${props.elem.title}`
                
            }} 
            
            
            id={`save${props.elem._id}`} style={{ display:'none',backgroundColor:'teal', color:'white', fontWeight:'600', width:'fit-content', fontSize:'0.75rem', padding:'0.25rem 0.5rem'}} className={`save${props.elem._id}`}>
            
                cancel
            </div>

            <div onClick={()=>deleteTask()} style={{color:'red', fontSize:'0.75rem', cursor:'pointer', width:'fit-content'}}>delete</div>
        </div>
    )

}

export default Card
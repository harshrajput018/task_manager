const CreateTask = ()=>{


    const addNote = ()=>{
        fetch('http://localhost:8001/addTask',{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                title:document.getElementById('title').value,
                description:document.getElementById('description').value
            })
        })
    }



    return(
        <div style={{width:'40%', margin:'auto', display:'flex', flexDirection:'column', marginTop:'100px', gap:'1rem'}}>
            <input id="title" style={{padding:'0.5rem 1rem', border:'solid lightgrey 1px'}} placeholder="Title" type="text" />
            <input id="description" style={{padding:'0.5rem 1rem', border:'solid lightgrey 1px'}} placeholder="Description" type="text" />
            <button onMouseEnter={(e)=>{
                e.target.style.transform= `scale(1.1)`
                e.target.style.backgroundColor = `teal`
            }}
            onMouseLeave={(e)=>{
                e.target.style.transform= `scale(1)`
                e.target.style.backgroundColor = `#299e9e`
            }}

            onClick={()=>addNote()}

             style={{padding:'0.4rem 1rem',borderRadius:'0.5rem', width:'fit-content', margin:'auto', fontSize:'15px', background:'#299e9e', color:'white', fontWeight:'600', fontFamily:'sans-serif', border:'none', transition: `transform 0.1s ease-in-out`, cursor:'pointer'}} className="btn">
                ADD
            </button>
        </div>
    )

}

export default CreateTask;
import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'

const CreateTaskForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [status, setStatus] = useState('')
    const [tasks,setTasks]=useState([])
    const navigate = useNavigate();


    function handleFormSubmit(e)
        {
e.preventDefault()
const newTask={
    id:Date.now(),
    title:title,
    description:description,
    date:date,
isCompleted:false
}

const alltasks=[...tasks,newTask]
localStorage.setItem('Task', JSON.stringify(alltasks))
navigate('/')
        }
    useEffect(()=>{
        const getFromLocal=JSON.parse(localStorage.getItem('Task'))|| []
        setTasks(getFromLocal)
    },[])

    return (
        <>
        <h2 className='text-center mt-5'>Add New Task Details</h2>
        <div className="container w-50">
     <form onSubmit={handleFormSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputtitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputtitle"
        onChange={(e)=>setTitle(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputDesci" className="form-label">Description</label>
    <input type="text" className="form-control" id="exampleInputDesci" 
        onChange={(e)=>setDescription(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputDesci" className="form-label">Date</label>
    <input type="text" className="form-control" id="exampleInputDesci" 
        onChange={(e)=>setDate(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputDesci" className="form-label">Status</label>
    <input type="text" className="form-control" id="exampleInputDesci" 
        onChange={(e)=>setStatus(e.target.value)}
    />
  </div>

  <button type="submit" className="btn btn-primary">Add Task</button>
</form>
</div>
    </>
    )
}

export default CreateTaskForm

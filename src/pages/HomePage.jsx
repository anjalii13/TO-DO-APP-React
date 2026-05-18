import React, { useEffect } from 'react'
import { useState } from 'react';
import tasks from '../data.js'
import { Link } from 'react-router-dom';
import { MdEdit , MdDelete} from "react-icons/md";

const HomePage = ({data}) => {

    function saveToLocal(){
        localStorage.setItem("Task",JSON.stringify(item))
    }
    function getFromLocal(){
        return JSON.parse(localStorage.getItem('Task'))||[]
    }
    function fetchData(){
        const getDataFromLocal= getFromLocal()
        if(getDataFromLocal){
            setTask(getDataFromLocal)
        }
        else{
            setTask(data)
        }
    }


useEffect(()=>{
    fetchData() 
},[])
    
    const [task, setTask] = useState([]);
    return (

        <div className='container align-right'>
            <Link className='btn btn-primary ' to='/create'>Add new task</Link>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Sr.No.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    <th scope='col'>Status</th>
                </tr>
            </thead>
             <tbody>
            {
                task.map((item,i) => (
                            <tr key={i}>
                                <th scope="row">{item.id}</th>  
                                <td>{item.title}</td>   
                                <td>{item.description}</td>
                                <td>{item.date}</td>
                                <td className={`${item.isCompleted ?'text-success' : 'text-primary'}`}>{item.isCompleted ? 'Completed' : 'In Progress'}</td>
                                <td>
                                    <Link className='btn btn-info' to= '/edit'><MdEdit />
</Link>
                                    <Link className='btn btn-danger ms-1' to= '/delete'><MdDelete /></Link>

                                    
                                    
                                     </td>
                            </tr>
                ))}
                        </tbody>
                    </table>    
        </div>
    )
}

export default HomePage

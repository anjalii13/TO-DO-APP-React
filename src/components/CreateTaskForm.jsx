import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateTaskForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [status, setStatus] = useState('In Progress') // ✅ FIXED DEFAULT

    const navigate = useNavigate()

    function handleFormSubmit(e) {
        e.preventDefault()

        const newTask = {
            id: crypto.randomUUID(),
            title,
            description,
            date,
            status
        }

        const existingTasks =
            JSON.parse(localStorage.getItem('Task')) || []

        const updatedTasks = [...existingTasks, newTask]

        localStorage.setItem('Task', JSON.stringify(updatedTasks))

        navigate('/')
    }

    return (
        <div className="container w-50 mt-4">

            <h2>Add New Task</h2>

            <form onSubmit={handleFormSubmit}>

                <input
                    type="text"
                    placeholder="Title"
                    className="form-control mb-2"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Description"
                    className="form-control mb-2"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <input
                    type="date"
                    className="form-control mb-2"
                    onChange={(e) => setDate(e.target.value)}
                />

                <select
                    className="form-control mb-3"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>

                <button className="btn btn-primary w-100">
                    Add Task
                </button>

            </form>

        </div>
    )
}

export default CreateTaskForm
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditForm = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [status, setStatus] = useState('')

    // Load previous task data
    useEffect(() => {

        const tasks = JSON.parse(localStorage.getItem('Task')) || []

        const existingTask = tasks.find(
            (item) => item.id === Number(id)
        )

        if (existingTask) {
            setTitle(existingTask.title)
            setDescription(existingTask.description)
            setDate(existingTask.date)
            setStatus(existingTask.status)
        }

    }, [id])

    // Update task
    function handleUpdate(e) {

        e.preventDefault()

        const tasks = JSON.parse(localStorage.getItem('Task')) || []

        const updatedTasks = tasks.map((item) => {

            if (item.id === Number(id)) {
                return {
                    ...item,
                    title,
                    description,
                    date,
                    status
                }
            }

            return item
        })

        localStorage.setItem('Task', JSON.stringify(updatedTasks))

        navigate('/')
    }

    return (
        <>
            <h2 className='text-center mt-5'>Edit Task</h2>

            <div className="container w-50">

                <form onSubmit={handleUpdate}>

                    <div className="mb-3">
                        <label className="form-label">Title</label>

                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>

                        <input
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Date</label>

                        <input
                            type="date"
                            className="form-control"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Status</label>

                        <input
                            type="text"
                            className="form-control"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Update Task
                    </button>

                </form>
            </div>
        </>
    )
}

export default EditForm
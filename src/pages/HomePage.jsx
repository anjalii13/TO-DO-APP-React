import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdEdit, MdDelete } from "react-icons/md"
import '../index.css'

const HomePage = () => {

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('All')
    const [task, setTask] = useState([])

    function saveToLocal(updatedTasks) {
        localStorage.setItem('Task', JSON.stringify(updatedTasks))
    }

    function getFromLocal() {
        return JSON.parse(localStorage.getItem('Task')) || []
    }

    useEffect(() => {
        setTask(getFromLocal())
    }, [])

    function handleDelete(id) {
        const updatedTasks = task.filter(item => item.id !== id)
        setTask(updatedTasks)
        saveToLocal(updatedTasks)
    }

    const filteredTasks = task.filter((item) => {

    const title = (item.title || '').toLowerCase().trim()
    const status = (item.status || '').toLowerCase().trim()

    const searchText = search.toLowerCase().trim()
    const filterText = filter.toLowerCase().trim()

    const matchesSearch =
        searchText === '' || title.includes(searchText)

    const matchesFilter =
        filterText === 'all' || status === filterText

    return matchesSearch && matchesFilter
})

    return (
        <div className='container align-right'>

            <Link className='btn btn-primary' to='/create'>
                Add new task
            </Link>

            {/* SEARCH + FILTER */}
            <div className="d-flex justify-content-between align-items-center mt-3 mb-3">

                <input
                    type="text"
                    placeholder="Search Task by title"
                    value={search}
                    className="form-control w-50"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
>
    <option value="All">All</option>
    <option value="Completed">Completed</option>
    <option value="In Progress">In Progress</option>
    <option value="Pending">Pending</option>
</select>

            </div>

            {/* TABLE */}
            <table className="table">

                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredTasks.length === 0 ? (
                        <tr>
                            <td colSpan="6" style={{ textAlign: "center" }}>
                                No tasks found
                            </td>
                        </tr>
                    ) : (
                        filteredTasks.map((item) => (
                            <tr key={item.id}>

                                <td>{String(item.id).slice(0, 6)}</td>

                                <td>{item.title}</td>

                                <td>{item.description}</td>

                                <td>{item.date}</td>

                                <td>{item.status}</td>

                                <td>
                                    <Link className='btn btn-info' to={`/edit/${item.id}`}>
                                        <MdEdit />
                                    </Link>

                                    <button
                                        className='btn btn-danger ms-1'
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <MdDelete />
                                    </button>
                                </td>

                            </tr>
                        ))
                    )}
                </tbody>

            </table>
        </div>
    )
}

export default HomePage
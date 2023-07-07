import React, { useState, useEffect } from 'react'

function TaskList() {

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/tasks/all").then((res) => res.json()).then((result) => {
            setTasks(result);
        })
    }, [tasks])

    function handleRemove(id){
        fetch(`http://localhost:8080/tasks/delete/${id}`, { method: 'DELETE' })
    }

    return (
        <>
            <ul>
                {tasks.map((task) => {
                    return <>
                        <li key={task.id}>
                            <h2>{task.assignedMember}</h2>
                            <p>{task.description}</p>
                            <h4>{task.currentStatus === false ? "Incomplete": "complete"}</h4>
                            <button onClick={()=>handleRemove(task.id)}>Remove</button>
                        </li>
                    </>
                })}
            </ul>
        </>
    )
}

export default TaskList
import React, { useState, useEffect } from 'react'
import Task from '../task/Task';

function TaskList() {
   
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/tasks/all").then((res) => res.json()).then((result) => {
            setTasks(result);
        })
    }, [tasks])

    

    return (
        <div className='listContainer'>
            <ul>
                {tasks.map((task) => <Task task={task}  key={task.id}/>)}
            </ul>
        </div>
    )
}

export default TaskList
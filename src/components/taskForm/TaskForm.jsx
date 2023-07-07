import React, { useState } from 'react'

function TaskForm() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        const newTask = {
            title: title,
            description: desc,
            assignedMember: name,
            currentStatus: false
        }
        fetch('http://localhost:8080/tasks/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(response => {
                if (response.ok) {
                    setTitle('')
                    setName('')
                    setDesc('')
                } else {
                    throw new Error('Error saving note');
                }
            })
            .catch(error => {
                console.error('Error saving task:', error);
            });

    }
    return (
        <div className='formContainer'>
            <h1>Add Your Task</h1>

            <form onSubmit={handleSubmit} className='form'>
                <label for="title">Task Title:</label>
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} required/>
                <label for="mname">Assigned Member Name:</label>
                <input type="text" id="mname" value={name} onChange={e => setName(e.target.value)} required/>
                <label for="desc">description:</label>
                <input type="text" id="desc" value={desc} onChange={e => setDesc(e.target.value)} required/>
                <button type='submit'>Submit</button>

            </form>

        </div>
    )
}

export default TaskForm
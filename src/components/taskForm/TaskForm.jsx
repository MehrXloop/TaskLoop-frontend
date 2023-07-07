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
            currentStatus:false
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
                    console.log('Note saved successfully!');
                } else {
                    throw new Error('Error saving note');
                }
            })
            .catch(error => {
                console.error('Error saving note:', error);
            });

    }
    return (

        <form onSubmit={handleSubmit}>
            <label for="title">Task Title:</label><br />
            <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}/><br />
            <label for="mname">Assignment Member Name:</label><br />
            <input type="text" id="mname" value={name} onChange={e => setName(e.target.value)}/><br />
            <label for="desc">description:</label><br />
            <input type="text" id="desc" value={desc} onChange={e => setDesc(e.target.value)}/><br /><br />
            <button type='submit'>Submit</button>

        </form>
    )
}

export default TaskForm
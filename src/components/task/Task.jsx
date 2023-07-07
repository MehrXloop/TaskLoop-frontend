import React from 'react';
import { useState } from 'react';

function Task({ task }) {
  const [toggleStatus, setToggleStatus] = useState(task.currentStatus);

  function handleRemove(id) {
    fetch(`http://localhost:8080/tasks/delete/${id}`, { method: 'DELETE' });
  }

  async function handleToggleStatus() {
    const updatedStatus = !toggleStatus;
    setToggleStatus(updatedStatus);

    const updatedTask = {
      ...task,
      currentStatus: updatedStatus,
    };

    try {
      const response = await fetch('http://localhost:8080/tasks/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        console.log('Status updated successfully');
      } else {
        console.log('Status update failed');
        // Revert the status change if the update request fails
        setToggleStatus(!updatedStatus);
      }
    } catch (error) {
      console.log('An error occurred while updating the status', error);
      // Revert the status change if an error occurs
      setToggleStatus(!updatedStatus);
    }
  }

  return (
    <li className='list'>
      <h1>Title: <span>{task.title}</span></h1>
      <p>Assigned Member: <span>{task.assignedMember}</span></p>
      <p>Description: <div>{task.description}</div></p>
      <p onClick={handleToggleStatus} className='toggle'>
        Status: <span>{toggleStatus === false ? 'Incomplete' : 'Complete'}</span>
      </p>
      <button onClick={() => handleRemove(task.id)}>Remove</button>
    </li>
  );
}

export default Task;

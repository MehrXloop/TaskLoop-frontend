import React from 'react'

function TaskForm() {
    return (

        <form >

            <label for="mname">Assignment Member Name:</label><br />
            <input type="text" id="mname" name="fname" value="" /><br />
            <label for="mname">Assignment Member Name:</label><br />
            <input type="text" id="mname" name="fname" value="" /><br />
            <label for="desc">description:</label><br />
            <input type="text" id="desc" value="" /><br /><br />
            <label for="desc">description:</label><br />
            <input type="text" id="lname"  value="" /><br /><br />
            <input type="submit" value="Submit" />

        </form>
    )
} 

export default TaskForm
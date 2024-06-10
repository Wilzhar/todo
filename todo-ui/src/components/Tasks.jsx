import React from 'react'
import Task from './Task'

function Tasks(props) {
    return (
        <div>
            <h1>Tasks</h1>
            {props.tasks.map(task => <Task key={task.id} task={task} />)}
        </div>
    )
}

export default Tasks

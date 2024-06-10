import React from 'react'

function Task(props) {
    return (
        <div>
            <div key={props.task.key}>
                <h2>{props.task.title}</h2>
                <p>{props.task.body}</p>
            </div>
        </div>
    )
}

export default Task

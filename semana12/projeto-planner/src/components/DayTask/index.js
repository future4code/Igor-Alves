import React from 'react';




function DayTask(props) {
    const taskOfDay = task => {
        return  task.day === props.day
    }

    return (
        <div>
            <h3>{props.day}</h3>
            {props.tasks.filter(taskOfDay).map( task => (
                <div key={task.id}>
                    <li>{task.text}</li>
                </div>
            ))}
        </div>
    );
}


export default DayTask;
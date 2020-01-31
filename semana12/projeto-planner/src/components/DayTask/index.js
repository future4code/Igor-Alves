import React from 'react';
import styled from 'styled-components';


const Title = styled.h3`
    align-self: center;
    margin-bottom: 0.5em;
` 

const ContainerDay = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-left: 1px solid lightgrey;
    :first-child{
        border: none;
    }
`

export function DayTask(props) {
    const taskOfDay = task => {
        return  task.day === props.day
    }

    return (
        <ContainerDay>
            <Title>{props.day}</Title>
            {props.tasks && props.tasks.filter(taskOfDay).map( task => (
                <div key={task.id}>
                    <li>{task.text}</li>
                </div>
            ))}
        </ContainerDay>
    );
}


export default DayTask;
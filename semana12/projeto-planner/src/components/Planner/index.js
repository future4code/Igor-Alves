import React from "react";
import DayTask from "../DayTask";
import styled from 'styled-components';
import 'rsuite/dist/styles/rsuite-default.css';



const ContainerPlanner = styled.div`
  width: 90vw;
  height: 70vh;
  margin: 0 auto;
  box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.15);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  gap: 1em;
`


export function Planner(props){
    return (
      <ContainerPlanner>
        <DayTask day='Segunda' tasks={props.tasks}/>
        <DayTask day='Terça' tasks={props.tasks}/>
        <DayTask day='Quarta' tasks={props.tasks}/>
        <DayTask day='Quinta' tasks={props.tasks}/>
        <DayTask day='Sexta' tasks={props.tasks}/>
        <DayTask day='Sábado' tasks={props.tasks}/>
        <DayTask day='Domingo' tasks={props.tasks}/>
      </ContainerPlanner>
    )
}

export default Planner;
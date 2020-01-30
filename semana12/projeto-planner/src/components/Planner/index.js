import React from "react";
import DayTask from "../DayTask";
import styled from 'styled-components';
import 'rsuite/dist/styles/rsuite-default.css';
import { Grid, Row, Col } from 'rsuite';



const ContainerPlanner = styled.div`
  width: 90vw;
  height: 70vh;
  margin: 0 auto;
  box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.15);
  padding: 10px;
`


function Planner(props){
    return (
      <ContainerPlanner>
        <Grid>
          <Row gutter={16}>
            <Col xs={3}>
              <DayTask day='Segunda' tasks={props.tasks}/>
            </Col>
            <Col xs={3}>
              <DayTask day='Terça' tasks={props.tasks}/>
            </Col>
            <Col xs={3}>
              <DayTask day='Quarta' tasks={props.tasks}/>
            </Col>
            <Col xs={3}>
              <DayTask day='Quinta' tasks={props.tasks}/>
            </Col>
            <Col xs={3}>
              <DayTask day='Sexta' tasks={props.tasks}/>
            </Col>
            <Col xs={3}>
              <DayTask day='Sábado' tasks={props.tasks}/>
            </Col>
            <Col xs={3}>
              <DayTask day='Domingo' tasks={props.tasks}/>
            </Col>
          </Row>
        </Grid>
      </ContainerPlanner>
    )
}

export default Planner;
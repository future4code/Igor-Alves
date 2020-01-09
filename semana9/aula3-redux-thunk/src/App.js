import React from 'react';
import styled from 'styled-components';
import TaskList from './components/TaskList/index';
import { Provider } from 'react-redux';
import store from './store'



const Title = styled.p `
  color: #b83f45;
  margin: 0 0 5vh 0;
  text-align: center;
  font-size: 10vh;
`


const MainContainer = styled.div `
  background-color: #f4f4f4;
  height: 100vh;
  width: 100vw;
`


function App() {
  return (
    <Provider store={store}>
      <MainContainer>
        <Title>4Task</Title>
        <TaskList/>
      </MainContainer>
    </Provider>
  );
}



export default App;

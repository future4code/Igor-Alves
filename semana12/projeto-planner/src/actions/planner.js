import axios from 'axios'


const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-igor'


export const getAllTasks = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseURL}`)

        dispatch(setAllTasks(response.data))
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar acessar as suas tasks da semana.");
    }
} 


export const setAllTasks = (allTasks) => ({
    type: 'SET_ALL_TASKS',
    payload: {
        allTasks,
    }
})


export const createTask = (text, day) => async (dispatch) => {
    const TaskData = {
        text,
        day,
    }
    
    try {
        await axios.post(`${baseURL}`, TaskData);

        dispatch(getAllTasks());
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar criar uma nova tarefa.");
    }
}
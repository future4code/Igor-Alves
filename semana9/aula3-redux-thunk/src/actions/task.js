import axios from "axios"



export const createTask = (text) => async (dispatch, getState) => {
    await axios.post("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor/todos", { text: text });

    dispatch(getTasks())
}


export const setTasksAction = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks,
    }
})


export const getTasks = () => async (dispatch, getState) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor/todos");

    dispatch(setTasksAction(response.data.todos));
}


export const markTask = (taskId) => async (dispatch, getState) => {
    await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor/todos/${taskId}/toggle`);

    dispatch(getTasks())
}


export const removeTask = (taskId) => async (dispatch, getState) => {
    await axios.delete(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor/todos/${taskId}`);

    dispatch(getTasks())
}


export const removeAllTask = () => async (dispatch, getState) => {
    await axios.delete(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor/todos/delete-done`);

    dispatch(getTasks())
}


export const markAllTasks = () => async (dispatch, getState) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor/todos");
    
    for (let id in response.data.todos) {
        await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor/todos/${response.data.todos[id].id}/toggle`);
    }
    
    dispatch(getTasks())
}
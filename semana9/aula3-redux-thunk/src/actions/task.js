import axios from "axios"


export const addTaskAction = (task) => {
    return {
        type: "ADD_TASK",
        payload: {
            task, 
        }
    }
}

export const setTasksAction = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks,
    }
})

export const getTasks = () => async (dispatch, getState) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor/todos")
    dispatch(setTasksAction(response.data.tasks));
}


export const markTaskAction = (taskId) => {
    return {
        type: "MARK_TASK",
        payload: {
            taskId,
        }
    }
}


export const removeTaskAction = (id) => {
    return {
        type: "REMOVE_TASK",
        payload: {
            id: id
        }
    }
}


export const filterCheckedTasks = () => {
    return {
        type: "FILTER_CHECKED_TASKS",
        payload: {}
    }
}
  

export const filterUncheckedTasks = () => {
    return {
        type: "FILTER_UNCHECKED_TASKS",
        payload: {}
    }
}
  

export const MarkAllTasks = () => {
    return {
        type: "MARK_ALL_TASKS",
        payload: {
            checked: true
        }
    }
}
  

export const removeAllTasks = () => {
    return {
        type: "REMOVE_ALL_TASKS",
        payload: {
            TaskList: []
        }
    }
}
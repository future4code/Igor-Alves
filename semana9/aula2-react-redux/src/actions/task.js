export const addTaskAction = (newTask) => {
    return {
        type: "ADD_TASK",
        payload: {
            task: action.payload.task, 
            checked: false, 
            id: new Date.getTime()
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


export const MarkTask = (id) => {
    return {
        type: "MARK_TASK",
        payload: {id}
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
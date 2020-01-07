const initialState = {
    taskList: [{
        text: 'tarefa',
        checked: false,
        id: 0
    }]
};


const tasks = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TASK':
            const newTask = {
                Task: action.payload.task, 
                checked: false, 
                id: new Date.getTime()
            }
            return {...state, taskList: [...state.taskList, newTask]}
        default:
            return state;
    }

} 

export default tasks;
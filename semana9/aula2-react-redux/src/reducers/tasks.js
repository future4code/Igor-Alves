const initialState = {
    taskList: [{
        taskName: 'Estudar Redux',
        checked: false,
        id: new Date()
    }]
};


const tasks = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TASK':
            const newTask = {
                task: action.payload.task, 
                checked: false, 
                id: new Date.getTime()
            }
            return {...state, taskList: [...state.taskList, newTask]}
            break;
        default:
            return state;
    }

} 

export default tasks;
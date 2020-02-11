const initialState = {
    allTasks: [],
}

const planner = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ALL_TASKS':
            const taskList = action.payload.allTasks;
            return {...state, allTasks: taskList};
        default:
            return state;  
    }
}


export default planner;
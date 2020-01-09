const initialState = {
    taskList: [],
};



const tasks = (state = initialState, action) => {
    switch(action.type){
        case "SET_TASKS":
            return {...state, taskList: action.payload.tasks};
        default:
            return state;
    }
} 



export default tasks;
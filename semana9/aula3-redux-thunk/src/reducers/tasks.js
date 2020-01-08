const initialState = {
    taskList: []
};


const tasks = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TASK':
            const newTask = {
                task: action.payload.task, 
                checked: false, 
                id: new Date().getTime()
            }
            const newTaskList = [...state.taskList, newTask]
            return {...state, taskList: newTaskList}

        case 'MARK_TASK':
            const copyTaskList = state.taskList.map((task) => {
                if(task.id === action.payload.taskId){
                    return { ...task, checked: !task.checked }
                    console.log(task.checked)
                } else {
                    return task
                }
            })

            return { ...state, taskList: copyTaskList }
        
        default:
            return state;
    }

} 

export default tasks;
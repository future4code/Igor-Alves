import axios from 'axios';
import { setAllTasks, getAllTasks, createTask } from './planner';


describe('Testa action que define as tasks vindo da API', () => {
  test('Testa o type e o payload da action chegam corretamente', () => {
    const allTaskMock = [
      {
        "id": "jGH9xnVXQMeU3tZOQ2Gy",
        "day": "Segunda",
        "text": "Lavar a louça"
      }
    ]

    const action = setAllTasks(allTaskMock)

    expect(action.type).toEqual('SET_ALL_TASKS')
    expect(action.payload).toEqual({"allTasks": allTaskMock})
  })
})


describe('Testa action de pegar todos as tasks', () => {
  test('Testa a ação de dispatch está correta vindo da API', async () => {
    const tasksMock = [
      {
        id: "jGH9xnVXQMeU3tZOQ2Gy",
        day: "Segunda",
        text: "Lavar a louça"
      }
    ]

    const dispatchMock = jest.fn()

    axios.get = jest.fn( () => {
      return {
        data: tasksMock
      }
    })

    await getAllTasks()(dispatchMock)

    expect(dispatchMock).toHaveBeenCalledWith(setAllTasks(tasksMock))
  })
})


describe('Testa action de criar tasks', () => {
  test('Testa se cria a task', async () => {
    const dispatchMock = jest.fn()
    axios.post = jest.fn().mockReturnValue({
      status: 200
    })
    const textMock = "Lavar a louça"
    const dayMock = "Segunda"

    await createTask(textMock, dayMock)(dispatchMock)

    expect(dispatchMock).toHaveBeenCalled()
  })
})
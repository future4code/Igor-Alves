import { setAllTasks } from "../actions/planner";
import planner from './planner'

describe("testa o reducer do planner", () => {
    test('Testa se setAllTasks define uma lista de tarefas', () => {
        const currentState = {
            allTasks: [],
        }

        const allTaskMock = [
            {
              "id": "jGH9xnVXQMeU3tZOQ2Gy",
              "day": "Segunda",
              "text": "Lavar a louça"
            }
        ]

        const action = setAllTasks(allTaskMock)

        const newState = planner(currentState, action)

        expect(newState.allTasks).toHaveLength(1)
        expect(newState.allTasks[0].day).toEqual("Segunda")
    })
})
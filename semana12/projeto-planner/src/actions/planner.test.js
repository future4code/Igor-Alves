import { setAllTasks } from './planner';

describe('Testa actions de Post', ()=> {
    test('Testa set All Posts action', () => {
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
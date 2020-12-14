import { render, screen } from "@testing-library/react"
import TodoList from "."
import { Todo } from "../core/Todo"


describe('Testing TodoList', () => {
    let todos:Todo[] = []

    beforeEach(() => {
        todos = [
            {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false,
                "dueDate": 1582620058000
            },
            {
                "userId": 1,
                "id": 6,
                "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                "completed": false,
                "dueDate": 1582620058000
            },
            {
                "userId": 1,
                "id": 7,
                "title": "illo expedita consequatur quia in",
                "completed": false,
                "dueDate": 1582620058000
            }
        ]
    })


    it("Todolist ok", () => {
        render(<TodoList todos={todos} />)
        screen.debug()
    })
    it("Todolist with 3 items", () => {
        const {container} = render(<TodoList todos={todos} />)
        const trs = container.querySelectorAll('tr')
        expect(trs).toHaveLength(3)
        screen.debug()
        
    })


})
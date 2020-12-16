import React, { useContext } from 'react'
import { TodoDAOContext } from '../App'
import { Todo } from '../core/Todo'
import Modal from '../Modal/Modal'
import TodoRow from '../TodoRow'

export interface TodoListProps {
    todos: Todo[]
}


export default function TodoList({ todos }: TodoListProps) {


    const todoDAO = useContext(TodoDAOContext)

    todoDAO.findAll().then(todos => {
        console.log("context", todos)
    })

    return (
        <>
            <table className="table">
                <tbody>
                    {todos.map((todo: Todo) =>
                        <TodoRow todo={todo} key={todo.id} ></TodoRow>
                    )}
                </tbody>
            </table>
            <Modal/>
        </>
    )
}   
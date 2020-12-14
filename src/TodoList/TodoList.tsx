import React from 'react'
import { Todo } from '../core/Todo'

export interface TodoListProps{
    todos:Todo[]
}


export default function TodoList({todos}:TodoListProps){
    return (
        <table>
            {todos.map( (todo:Todo) => 
                <tr key={todo.id}>
                    <td>{todo.userId}</td>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.dueDate}</td>
                    <td>{todo.completed}</td>
                </tr>
            )}
        </table>
    )
}
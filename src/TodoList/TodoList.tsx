import React from 'react'
import { Todo } from '../core/Todo'
import TodoRow from '../TodoRow'

export interface TodoListProps{
    todos:Todo[]
}


export default function TodoList({todos}:TodoListProps){
    return (
        <table>
            {todos.map( (todo:Todo) => 
            <TodoRow todo={todo} key={todo.id}></TodoRow>
            )}
        </table>
    )
}
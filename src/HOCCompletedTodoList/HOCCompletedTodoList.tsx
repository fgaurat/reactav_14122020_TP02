

import React from 'react'
import { TodoListProps } from '../TodoList/TodoList'

export default function HOCCompletedTodoList(TodoList:any) {
    
    
    return function({todos}:TodoListProps){
        const completedTodo = todos.filter( todo => todo.completed)

        return (
            <TodoList todos={completedTodo} ></TodoList>
        )

    }
    
}

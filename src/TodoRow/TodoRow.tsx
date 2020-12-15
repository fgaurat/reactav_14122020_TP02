import React from 'react';
import { Todo } from '../core/Todo';

interface IProps{
    todo:Todo
}

function TodoRow({todo}:IProps) {
    return (
        <tr>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.dueDate}</td>
            <td>{todo.completed}</td>
        </tr>
    );
}

export default TodoRow;
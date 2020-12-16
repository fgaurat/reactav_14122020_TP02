import React from 'react';
import { Todo } from '../core/Todo';

interface IProps{
    todo:Todo
}

function TodoRow({todo}:IProps) {

    console.log("render Todorow "+todo.completed)

    return (
        <tr>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.dueDate}</td>
            <td>{todo.completed?'true':'false'}</td>
        </tr>
    );
}

// export default TodoRow;
export default React.memo(TodoRow);
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TodoList from '../TodoList';
import { TodoListProps } from '../TodoList/TodoList';
import { Todo } from '../core/Todo';

export default {
  title: 'TP02/TodoList',
  component: TodoList,

} as Meta;



const Template: Story<TodoListProps> = (args) => <TodoList {...args} />;

const todos:Todo[] = [
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

export const Todos3 = Template.bind({});
Todos3.args = {
  todos: todos,
};

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { Todo } from './core/Todo';
import HOCCompletedTodoList from './HOCCompletedTodoList/';
import ShowCompleted from './ShowCompleted';
import Concat from './Concat';
import Counter from './Counter/Counter';
import { TodoDAO } from './core/TodoDAO';

let initTodos:any = []

const todoDAO = new TodoDAO(process.env.REACT_APP_TODO_URL)

export const TodoDAOContext = React.createContext(todoDAO)


function App() {
  
  
  const [showCompleted,setShowCompleted] =useState(false)
  
  
  
  const [todos,setTodos] =useState([])

  useEffect(() => {
    const url = process.env.REACT_APP_TODO_URL
    fetch(url)
      .then( response => response.json())
      .then( data => {
        initTodos = [...data]
        setTodos(data)
      })

  }, [])


  const onShowCompleted = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const completedTodos = todos.filter((todo: Todo) => todo.completed === target.checked)
    if (target.checked) setTodos(completedTodos)
    else setTodos(initTodos)
    setShowCompleted(target.checked)
  }

  const CompletedTodoList = HOCCompletedTodoList(TodoList) 
  return (
    <div className="App">
      <hr/>
      <Counter/>
      <hr/>
      <Concat/>
      <hr/>
      <ShowCompleted showCompleted={showCompleted} onShowCompleted = {onShowCompleted}/>
      <h2>TodoList</h2>
      <TodoList todos={todos} ></TodoList>
      <h2>CompletedTodoList</h2>
      {/* <CompletedTodoList todos={todos} ></CompletedTodoList> */}
    </div>
  );
}

export default App;

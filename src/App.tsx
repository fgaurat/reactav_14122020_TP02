import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { Todo } from './core/Todo';

function App() {
  
  const [todos,setTodos] =useState([])
  
  useEffect(() => {
    const url = process.env.REACT_APP_TODO_URL
    fetch(url)
      .then( response => response.json())
      .then( data => setTodos(data))

  }, [])


  return (
    <div className="App">
      <TodoList todos={todos} ></TodoList>
    </div>
  );
}

export default App;

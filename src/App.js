import React,{ useContext } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';
//Importing Context
import {List} from './context/ListContext';

function App() {
  const { input } = useContext(List);
  return (
    <div className="App">
      <header>
        <h1>Hello Bitch { input }</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;

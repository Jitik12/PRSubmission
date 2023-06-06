import React from 'react'
import { useContext } from 'react';
//importing components
import {List} from '../context/ListContext';

const Form = () => {
  const { input, setInput, list, setList } = useContext(List);

  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      task : input ,
      status : true ,
      id : Math.floor(Math.random() *1000)
    }
    setList([
      ...list , newTask
    ])
    setInput('');

    console.log(list);
  }

  return (
    <div>
      <form onSubmit={addTask}>
        <input value={ input } onChange={handleChange} type="text" className="todo-input" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form
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
      </form>
    </div>
  );
}

export default Form
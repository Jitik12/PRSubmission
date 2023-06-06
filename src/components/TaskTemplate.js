import React, { useContext } from 'react'
import {List} from '../context/ListContext'

const TaskTemplate = ( {task} ) => {
  const doMe = (e) => {
    e.preventDefault();
    task.status = false ;  
    console.log(task);
  }
  const deleteTask = (e) => {
    e.preventDefault();
    console.log("Delete this Bitch");
  }

  return (
    <div className='todo'>
      <li className="todo-item">{task.task}</li>
      <button onClick={doMe} className='complete-btn'>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTask} className='trash-btn'>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TaskTemplate
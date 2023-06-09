import React, { useContext } from 'react'
import { List } from '../context/ListContext'
import TaskTemplate from './TaskTemplate';

const TodoList = () => {
  const { list } = useContext(List);
  return (
    <div className='todo-container'>
      <ul className="todo-list">
        {
          list.map( object => (
            <TaskTemplate key={object.id} task={object} />
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList
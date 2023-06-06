import React, { useContext } from "react";
import { List } from "../context/ListContext";
import clsx from "clsx";

const TaskTemplate = ({ task }) => {
  const { input, setInput, list, setList } = useContext(List);

  const doMe = (e) => {
    e.preventDefault();
    var updatedList = list.map((element)=>{
      if ( element.id === task.id )
      {
        return {
          ...element,
          status : !element.status
        }
      }
      else{
        return element ;
      }
    }) ;
    setList(updatedList) ;
    console.log(list);
  };
  const deleteTask = (e) => {
    e.preventDefault();
    setList(list.filter((element) => element.id !== task.id));
    console.log(list);
  };

  return (
    <div className="todo">
      {task.status ? (
        <li className="todo-item">{task.task}</li>
      ) : (
        <li className="todo-item completed">{task.task}</li>
      )}
      <button onClick={doMe} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTask} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TaskTemplate;

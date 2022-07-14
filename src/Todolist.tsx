import React, {FC} from 'react';
import {TasksType} from './App';

type PropsType = {
  title: string
  tasks: Array<TasksType>
};

export const Todolist: FC<PropsType> = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input/>
        <button>+</button>
      </div>

      <br/>

      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      <ul>
        {
          props.tasks.map(item => (
            <li key={item.id}>
              <input type="checkbox" checked={item.isDone}/>
              <span>{item.title}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
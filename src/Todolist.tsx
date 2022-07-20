import React, {FC} from 'react';
import {FilterType, TasksType} from './App';

type PropsType = {
  title: string
  tasks: Array<TasksType>
  removeItem: (id: number) => void
  changeTasksFilter: (val: FilterType) => void
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
        <button onClick={() => props.changeTasksFilter('all')}>All</button>
        <button onClick={() => props.changeTasksFilter('active')}>Active</button>
        <button onClick={() => props.changeTasksFilter('completed')}>Completed</button>
      </div>

      <ul>
        {
          props.tasks.map(item => (
            <li key={item.id}>
              <button onClick={() => props.removeItem(item.id)}>X</button>
              <input type="checkbox" checked={item.isDone}/>
              <span>{item.title}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
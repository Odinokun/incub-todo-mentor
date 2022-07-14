import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type TasksType = {
  id: number
  title: string
  isDone: boolean
}

function App() {
  const tasks: Array<TasksType> = [
    {id: 1, title: "Html", isDone: true},
    {id: 2, title: "Css", isDone: true},
    {id: 3, title: "JavaScript", isDone: false},
    {id: 4, title: "React", isDone: false},
  ]

  return (
    <div className="App">
      <Todolist title="What to learn?" tasks={tasks}/>
      <Todolist title="What to buy?" tasks={tasks}/>
    </div>
  );
}

export default App;

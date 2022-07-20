import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type TasksType = {
  id: number
  title: string
  isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed';

function App() {
  const [tasks, setTasks] = useState<Array<TasksType>>([
    {id: 1, title: "Html", isDone: true},
    {id: 2, title: "Css", isDone: true},
    {id: 3, title: "JavaScript", isDone: false},
    {id: 4, title: "React", isDone: false},
  ]);
  const [filterValue, setFilterValue] = useState<FilterType>('all');

  const removeItem = (id: number) => {
    const newArr = tasks.filter(t => t.id !== id);
    setTasks(newArr)
  }

  const changeTasksFilter = (val: FilterType) => {
    setFilterValue(val);
  }

  let newTasksArr = tasks;

  if (filterValue === 'active') {
    newTasksArr = tasks.filter(t => t.isDone)
  } else if (filterValue === 'completed') {
    newTasksArr = tasks.filter(t => !t.isDone)
  }

  return (
    <div className="App">
      <Todolist title="What to learn?"
                tasks={newTasksArr}
                removeItem={removeItem}
                changeTasksFilter={changeTasksFilter}
      />
    </div>
  );
}

export default App;

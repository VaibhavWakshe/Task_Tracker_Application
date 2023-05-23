import React, { useState } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';


const App = () => {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = task => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}/>
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
};
export default App;
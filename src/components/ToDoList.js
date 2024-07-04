import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h1 className="my-4"> Ma Todo List</h1>
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <AddTask addTask={addTask} />
    </div>
  );
}

export default TodoList;

/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, SetTasks] = useState([]);

  function createTask(task) {
    SetTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId){
    SetTasks(tasks.filter(task => task.id !== taskId))
  }

      
  useEffect(() => {
    SetTasks(data)
  }, [])

  return (
    <TaskContext.Provider value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask
    }}>{props.children}</TaskContext.Provider>
  );
}

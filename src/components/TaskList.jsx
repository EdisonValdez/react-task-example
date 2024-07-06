import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

 

/* eslint-disable react/prop-types */
function TaskList() { 

  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl text-center font-bold
    ">No hay tareas aún.</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => ( 
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

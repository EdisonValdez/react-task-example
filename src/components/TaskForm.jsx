import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"
 
function TaskForm() {
    const [title, SetTitle] = useState('')
    const [description, SetDescription] = useState('')
    const { createTask} = useContext(TaskContext)
 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        createTask({
            title, 
            description
        });
        SetTitle('')
        SetDescription('')
    }

  return (
        <div className="max-w-md max-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
                <input 
                placeholder="Escribe tu tarea" 
                onChange={(e) => SetTitle(e.target.value)}
                value={title} 
                className="bg-slate-300 p-3 w-full mb-2.5"
                autoFocus /> 
                 <textarea 
                 onChange={(e) => SetDescription(e.target.value)}
                value={description} 
                className="bg-slate-300 p-3 w-full mb-2.5"
                placeholder="Escribe la descripción de la tarea"></textarea>
                <button className="bg-indigo-500 px-3 text-white
                ">
                    Guardar
                </button>
            </form>
        </div>
  )
}

export default TaskForm
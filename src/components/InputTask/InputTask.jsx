import { useState } from "react";

export function InputTask({ setItens }) {
  
  
  const [taskValue, setTaskValue] = useState("")

  const handleInputTask = (event) =>{
    setTaskValue(event.target.value)
  }

  const handleAddTask = () =>{

    if(taskValue.trim() !== ""){

      setItens((prevItens) =>[...prevItens, taskValue])
      setTaskValue('')
    }
    
  }

  return (
    <div className="relative max-w-full flex justify-center gap-4 mt-4">
      <input
        className="px-4 outline-none bg-purple-200 rounded text-base text-purple-950 font-Roboto font-medium placeholder:font-normal placeholder:italic
            max-w-90 w-full border-b-2 border-purple-500"
        type="text"
        name="task"
        id="task"
        placeholder="Digite sua tarefa.."
        value={taskValue}
        onChange={handleInputTask}
      />
      
      <i className='bx bxs-plus-circle text-purple-400 text-4xl hover:text-purple-600 transition cursor-pointer' onClick={handleAddTask}></i>

    </div>
  );
}

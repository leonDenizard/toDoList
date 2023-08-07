import { useState } from "react"
import { Header } from "./Header/Header"
import { InputTask } from "./InputTask/InputTask"
import { TaskList } from "./TaskList/TaskList"

function App() {
  

  const [itens, setItens] = useState([])

  return (
    <main className="bg-primary-color min-h-screen w-full flex justify-center items-center">

      <section className="w-4/5 md:max-w-lg bg-purple-100 rounded p-4 shadow-lg">
        <Header></Header>
        <InputTask itens={itens} setItens={setItens}></InputTask>
        <TaskList itens={itens}></TaskList>
      </section>
      
      
    </main>
  )
}

export default App

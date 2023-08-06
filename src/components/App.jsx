import { Header } from "./Header/Header"
import { InputTask } from "./InputTask/InputTask"


function App() {
  

  return (
    <main className="bg-primary-color min-h-screen w-full flex justify-center items-center">

      <section className="h-4/5 w-4/5 bg-purple-100 rounded p-4 shadow-lg">
        <Header></Header>
        <InputTask></InputTask>
      </section>
      
      
    </main>
  )
}

export default App

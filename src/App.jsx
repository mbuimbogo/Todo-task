import Header from "./components/Header"
import TodoForm from "./components/TodoForm"

function App() {


  return (
    <div className="w-full bg-gray-200  h-screen p-4">
      <div className="bg-white max-w-4xl mx-auto flex flex-col items-center h-full text-center">
      <Header/>
      <TodoForm/>
      </div>
      
      
    </div>
  )
}

export default App

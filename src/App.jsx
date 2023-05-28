import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="w-full bg-gray-200  h-full p-4">
      <div className="bg-white max-w-4xl mx-auto flex flex-col items-center max-h-full text-center pb-4">
        <Header />
        <TodoForm />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import ToDoShow from "./ToDoShow";

const TodoForm = () => {
  const [todo, setToDo] = useState("");
  const [todoList, setToDoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editTaskName, setEditTaskName] = useState("");
  const [error, setError] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      setError("Task name cannot be empty");
      return;
    }

    if (editMode) {
      const updatedList = todoList.map((task) => {
        if (task.todoName === editTaskName) {
          return { ...task, todoName: todo };
        }
        return task;
      });
      setToDoList(updatedList);
      setEditMode(false);
      setEditTaskName("");
    } else {
      setToDoList([...todoList, { todoName: todo, completed: false }]);
    }
    setToDo("");
    setError("");
  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => task.todoName !== taskName);
    setToDoList(newTodoList);
  };

  const editTask = (taskName) => {
    setEditMode(true);
    setEditTaskName(taskName);
    const task = todoList.find((task) => task.todoName === taskName);
    if (task) {
      setToDo(task.todoName);
    }
  };

  const markAsCompleted = (taskName) => {
    const updatedList = todoList.map((task) => {
      if (task.todoName === taskName) {
        return { ...task, completed: true };
      }
      return task;
    });
    setToDoList(updatedList);
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleForm}>
        <input
          className="border border-slate-300 w-full p-3 placeholder:text-gray-500 rounded-md mb-5"
          placeholder="Add todo"
          type="text"
          value={todo}
          onChange={(e) => setToDo(e.target.value)}
        />
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <button
          type="submit"
          className="bg-blue-400 text-white py-3 px-8 rounded-lg mb-5"
        >
          {editMode ? "Update Task" : "Create Task"}
        </button>
      </form>
      {todoList.map((singleToDo) => (
        <div key={singleToDo.todoName} className="">
          <ToDoShow
            singleToDo={singleToDo}
            deleteTask={deleteTask}
            editTask={editTask}
            markAsCompleted={markAsCompleted}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoForm;

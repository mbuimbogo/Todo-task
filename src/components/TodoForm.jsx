import { useEffect, useState } from "react";
import ToDoShow from "./ToDoShow";
import axios from "axios";

const TodoForm = () => {
  const [todo, setToDo] = useState("");
  const [todoList, setToDoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editTaskName, setEditTaskName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTasks(); // Fetch tasks when the component mounts
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tasks");
      const tasks = response.data;
      setToDoList(tasks);
      console.log(tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await axios.post("http://localhost:3000/tasks", task);
      const newTask = response.data;
      // Update the todoList state with the new task
      setToDoList([...todoList, newTask]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      setError("Task name cannot be empty");
      return;
    }

    if (editMode) {
      const updatedList = todoList.map((task) => {
        if (task.description === editTaskName) {
          return { ...task, description: todo };
        }
        return task;
      });
      setToDoList(updatedList);
      setEditMode(false);
      setEditTaskName("");
    } else {
      createTask({ description: todo, completed: false });
    }
    setToDo("");
    setError("");
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      const newTodoList = todoList.filter((task) => task.id !== id);
      setToDoList(newTodoList);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

 
  const editTask = (taskName) => {
    setEditMode(true);
    setEditTaskName(taskName);
    const task = todoList.find((task) => task.description === taskName);
    if (task) {
      setToDo(task.description);
    }
  };

  const markAsCompleted = async (id) => {
    try {
      const updatedTask = { completed: true };
      await axios.patch(`http://localhost:3000/tasks/${id}`, updatedTask);
      const updatedList = todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        }
        return task;
      });
      setToDoList(updatedList);
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
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
        <div key={singleToDo.description} className="">
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

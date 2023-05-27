import React from "react";

export default function ToDoShow({ singleToDo, deleteTask, editTask }) {
  const handleDelete = () => {
    deleteTask(singleToDo.todoName);
  };

  const handleEdit = () => {
    editTask(singleToDo.todoName);
  };

  return (
    <div className="mt-6 w-[550px]">
      <ul>
        <li className="bg-gray-400 text-white py-5 rounded-lg text-2xl px-5 flex justify-between">
          {singleToDo.todoName}
          <div>
            <span
              className="text-red-600 text-3xl cursor-pointer mr-4"
              onClick={handleEdit}
            >
              Edit
            </span>
            <span
              className="text-red-600 text-3xl cursor-pointer"
              onClick={handleDelete}
            >
              X
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

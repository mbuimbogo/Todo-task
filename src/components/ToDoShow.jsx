import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

export default function ToDoShow({ singleToDo, deleteTask, editTask }) {
  const handleDelete = () => {
    deleteTask(singleToDo.todoName);
  };

  const handleEdit = () => {
    editTask(singleToDo.todoName);
  };

  return (
    <div className="mt-6 w-full md:w-[550px]">
      <ul>
        <li className="bg-gray-400 text-white py-5 rounded-lg text-2xl px-5 flex justify-between">
          {singleToDo.todoName}
          <div className="flex items-center">
            <span
              className="text-yellow-600 text-3xl cursor-pointer mr-4 hover:text-yellow-800 transition-colors duration-300"
              onClick={handleEdit}
            >
              <AiFillEdit />
            </span>
            <span
              className="text-red-400 text-3xl cursor-pointer hover:text-red-600 transition-colors duration-300"
              onClick={handleDelete}
            >
              <AiFillDelete />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

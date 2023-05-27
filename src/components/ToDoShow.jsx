import { motion } from "framer-motion";
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
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-gray-400 text-white py-5 rounded-lg text-2xl px-5 flex justify-between"
        >
          {singleToDo.todoName}
          <div className="flex items-center">
            <motion.span
              whileHover={{ scale: 1.2 }}
              className="text-yellow-600 text-3xl cursor-pointer mr-4 hover:text-yellow-800 transition-colors duration-300"
              onClick={handleEdit}
            >
              <AiFillEdit />
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              className="text-red-400 text-3xl cursor-pointer hover:text-red-600 transition-colors duration-300"
              onClick={handleDelete}
            >
              <AiFillDelete />
            </motion.span>
          </div>
        </motion.li>
      </ul>
    </div>
  );
}

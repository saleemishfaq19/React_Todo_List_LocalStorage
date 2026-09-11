import { useContext } from "react";
import { UserContext } from "./Context";

function TodoItems({ todo }) {
  const { delItem, toggleComplete, editTodo } =
    useContext(UserContext);

  return (
    <div
      className="
        flex items-center gap-3
        w-full
        p-4 mb-3
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-xl
        shadow-sm
      "
    >
      <input
        type="text"
        value={todo.todo}
        readOnly={!todo.complete}
        onChange={(e) =>
          editTodo(todo.id, e.target.value)
        }
        className="
          flex-1
          px-3 py-2
          rounded-lg
          outline-none
          bg-gray-100 dark:bg-gray-700
          text-gray-800 dark:text-white
          border border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-blue-500
        "
      />

      <button
        onClick={() => toggleComplete(todo.id)}
        className="
          px-4 py-2
          rounded-lg
          text-white
          bg-blue-600
          hover:bg-blue-700
          transition
        "
      >
        {todo.complete ? "Save" : "Edit"}
      </button>

      <button
        onClick={() => delItem(todo.id)}
        className="
          px-4 py-2
          rounded-lg
          text-white
          bg-red-500
          hover:bg-red-600
          transition
        "
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItems;
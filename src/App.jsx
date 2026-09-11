import { useContext, useEffect, useState } from "react";
import { UserContext } from "./components/Context";
import TodoItems from "./components/TodoItems";

function App() {
  const [Msg, setMsg] = useState("");

  const { todos, addItem } = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (Msg.trim() === "") return;

    addItem(Msg);
    setMsg("");
  };

  return (
    <div className="min-h-screen bg-gray-950 flex justify-center items-center p-5">
      <div className="w-full max-w-2xl bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Todo App
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            className="
              flex-1
              px-4 py-3
              bg-gray-800
              text-white
              border border-gray-600
              rounded-xl
              outline-none
              placeholder-gray-400
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500
            "
            type="text"
            placeholder="Enter a new todo..."
            value={Msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTodo();
              }
            }}
          />

          <button
            className="
              px-5 py-3
              bg-blue-600
              text-white
              font-medium
              rounded-xl
              hover:bg-blue-700
              active:scale-95
              transition
            "
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>

        <div>
          {todos.length === 0 ? (
            <p className="text-gray-400 text-center py-6">
              No todos added yet.
            </p>
          ) : (
            todos.map((item) => (
              <TodoItems key={item.id} todo={item} />
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  function delItem(id) {
    setTodos((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  function addItem(msg) {
    if (msg.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo: msg,
        complete: false,
      },
    ]);
  }

  // Edit todo text
  function editTodo(id, newText) {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, todo: newText }
          : item
      )
    );
  }

  // Change Edit -> Save
  function toggleComplete(id) {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, complete: !item.complete }
          : item
      )
    );
  }

  return (
    <UserContext.Provider
      value={{
        todos,
        addItem,
        delItem,
        editTodo,
        toggleComplete,
        setTodos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
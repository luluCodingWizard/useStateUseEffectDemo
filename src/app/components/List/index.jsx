import React, { useState } from "react";
import axios from "axios";

const List = ({ todos, fetchToDosFunc, setTodos }) => {
  const [loading, setLoading] = useState(false);

  const toggleCompletion = async (todoArgObject) => {
    const updatedMyTodoObject = {
      ...todoArgObject,
      completed: !todoArgObject.completed,
    };
    // Update the todos state to reflect the change in completion status
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoArgObject.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    try {
      setLoading(true);
      setTodos(updatedTodos);

      setTimeout(() => {
        // simulate api async call waiting to change backend data
        setLoading(false);
      }, 3000);
    } catch {
      console.log("error");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 max-w-md mx-auto">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`p-4 rounded-lg shadow-md ${
            todo.completed ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <h3
            className={`font-semibold ${
              todo.completed ? "text-green-800" : "text-red-800"
            }`}
          >
            {todo.title}
          </h3>
          <p
            className={`text-sm ${
              todo.completed ? "text-green-700" : "text-red-700"
            }`}
          >
            Status: {todo.completed ? "Completed" : "Not Completed"}
          </p>
          <button
            onClick={() => toggleCompletion(todo)}
            disabled={loading}
            className={`p-2 rounded-full ${
              todo.completed ? "bg-green-200" : "bg-red-200"
            } hover:${todo.completed ? "bg-green-300" : "bg-red-300"}`}
          >
            ✔
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;

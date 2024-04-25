import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../components/List";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchToDos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(response.data);
      setLoading(false);
    } catch (err) {
      setError("An error occurred.......");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchToDos();
  }, []);

  if (loading) {
    return <div>Loading..............</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="todo-list">
      <List todos={todos} fetchToDosFunc={fetchToDos} setTodos={setTodos} />
    </div>
  );
};

export default Index;

import React, { useState } from "react";
import AddTodo from "../AddtTodo/AddTodo";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: "장보기", status: "active" },
    { id: uuidv4(), text: "공부하기", status: "active" },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  // AddTodo컴포넌트의 데이터를 todo로 받아오고 기존에 있는 todos를 풀어서,
  // AddTodo컴포넌트에서 받아온 데이터를 배열에 넣는다

  const handleUpdate = (update) =>
    setTodos(todos.map((t) => (t.id === update.id ? update : t)));

  const handleDelete = (del) => setTodos(todos.filter((t) => t.id !== del.id));

  const filtered = getFiltered(todos, filter);

  return (
    <section>
      <ul>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFiltered(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((t) => t.status === filter);
}

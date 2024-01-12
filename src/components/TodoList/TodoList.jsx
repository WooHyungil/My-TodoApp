import React, { useState } from "react";
import AddTodo from "../AddtTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  // AddTodo컴포넌트의 데이터를 todo로 받아오고 기존에 있는 todos를 풀어서,
  // AddTodo컴포넌트에서 받아온 데이터를 배열에 넣는다

  const handleUpdate = (updated) =>
    // 상태가 변경이 됬다 안됬다 라는걸 업데이트 하기 위해서 있다.
    // onUpdate에서 props로 가져와
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  // 기존에 있는 todos의 배열을 map으로 낱개로 t로 풀어서
  // 만약 아이템 아이디가 업데이트하고자하는 id랑 같으면 업데이트하고 아니면 그냥 t로 가자

  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

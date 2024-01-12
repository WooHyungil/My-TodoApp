import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  // input에 입력하면 input를 의 값을 상태변경

  const handleSubmit = (e) => {
    e.preventDefault();
    // form으로 이루어졌기 때문에 새로고침을 방지하고자...
    if (text.trim().length === 0) {
      return;
    }
    // 만약 text의 앞뒤공백의 길이가 0이면 그냥 반환해라

    onAdd({ id: uuidv4(), text, status: "active" });
    // form이 작동하면 props로 받아온 onAdd의 text와 상태, 아이디를 새로운배열로 추가
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

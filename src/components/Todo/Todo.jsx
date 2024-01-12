import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onDelete, onUpdate }) {
  const { status, text } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        onChange={handleChange}
        checked={status === "completed"}
      />
      <label htmlFor="checkbox">{text}</label>
      <span>
        <button onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}

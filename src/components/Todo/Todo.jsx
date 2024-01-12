import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  // 자주 todo.text, todo.status를 쓰게되니까 비구조화할당으로 편하게 쓰기위해

  const handleChange = (e) => {
    // handleChange인 input의 이벤트를 받아와서
    const status = e.target.checked ? "completed" : "active";
    // 상수 status는 checked를 눌렀을때 completed으로 바뀌고 업데이트 아니면 그냥 active로
    onUpdate({ ...todo, status });
    // status : status는 그냥 status로 생략가능
    // onUpdate가 되면 객체안에 기존에 있던 todo를 풀어서 상태만 변경해주자
  };

  const handleDelete = () => onDelete(todo);
  //삭제가 클릭되면 props로 받아온 onDelete에 todo가 삭제되어라

  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        //checked의 상태가 completed인지 아닌지에 따라서 결정하자!
        onChange={handleChange}
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

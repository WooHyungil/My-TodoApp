import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Header({ filterChange, filters }) {
  return (
    <header>
      <ul>
        {filters.map((value) => (
          <li key={uuidv4()}>
            <button onClick={() => filterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

import React from "react";
import "./todoItem.scss";

export default function TodoItem({ id, title, description, statusButton }) {
  return (
    <div className="todo-item">
      <div className="todo-item-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button className="item-delete-button" type="button" onClick={e => statusButton(e, id)}>
        X
      </button>
    </div>
  );
}

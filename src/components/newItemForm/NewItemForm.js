import React from "react";
import { Link } from "react-router-dom";
import "./newItemForm.scss";

export default function NewItemForm({
  title,
  description,
  handleTitleChange,
  handleDescriptionChange,
  handleSubmitForm,
  isShowingSubmissionError
}) {
  return (
    <div className="item-form">
      <h1>New task</h1>
      <div className="task-title">
        <label htmlFor="title">
          Title:{<span style={{ color: "lightcoral" }}>*</span>}
        </label>
        <input
          className={isShowingSubmissionError ? "error" : ""}
          type="text"
          onChange={handleTitleChange}
          value={title}
          placeholder="Your awesome title goes here!"
        />
      </div>
      <div className="task-description">
        <label htmlFor="description">Description:</label>
        <textarea
          rows="2"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
          placeholder="And here you should provide a great description for your task!"
        />
      </div>
      <Link to="/tasks">
        <button className="back-button"> Back</button>
      </Link>
      <button
        className="submit-button"
        onClick={handleSubmitForm}
        value="Submit"
      >
        Submit
      </button>
    </div>
  );
}

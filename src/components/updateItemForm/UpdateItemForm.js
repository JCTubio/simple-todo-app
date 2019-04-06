import React from "react";
import { Link } from "react-router-dom";
import "./updateItemForm.scss";

export default function UpdateItemForm({
  title,
  description,
  handleTitleChange,
  handleDescriptionChange,
  handleSubmitForm,
  isShowingSubmissionError
}) {
  return (
    <div className="item-form">
      <h1>Update task</h1>
      <div className="task-title">
        <label htmlFor="title">
          Title:{<span style={{ color: "lightcoral" }}>*</span>}
        </label>
        <input
          type="text"
          className={isShowingSubmissionError ? "error" : ""}
          onChange={handleTitleChange}
          value={title}
        />
      </div>
      <div className="task-description">
        <label htmlFor="description">Description:</label>
        <textarea
          rows="2"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
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

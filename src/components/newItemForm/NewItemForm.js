import React from 'react'
import { Link } from 'react-router-dom'

export default function NewItemForm({
  title,
  description,
  handleTitleChange,
  handleDescriptionChange,
  handleSubmitForm,
}) {
  return (
    <div className='new-item-form'>
      <label htmlFor='title'>Title:</label>
      <input type='text' onChange={handleTitleChange} value={title} />
      <label htmlFor='description'>Description:</label>
      <textarea
        rows='2'
        name='description'
        onChange={handleDescriptionChange}
        value={description}
      />
      <Link to='/tasks'>
        <button> Back</button>
      </Link>
      <button onClick={handleSubmitForm} value='Submit'>
        Submit
      </button>
    </div>
  )
}

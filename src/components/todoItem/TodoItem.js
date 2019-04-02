import React from 'react'

export default function TodoItem({ title, description, statusButton }) {
  return (
    <div className='todoItem'>
      <h4>{title}</h4>
      <p>{description}</p>
      <button type="button" onClick={statusButton}>X</button>
    </div>
  )
}

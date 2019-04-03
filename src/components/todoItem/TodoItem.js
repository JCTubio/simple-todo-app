import React from 'react'

export default function TodoItem({ id, title, description, statusButton }) {
  return (
    <div className='todoItem'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button type="button" onClick={(e) => statusButton(e, id)}>X</button>
    </div>
  )
}

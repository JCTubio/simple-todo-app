import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import map from 'lodash/map'
import TodoItem from '../todoItem/TodoItem'

export default function Todolist(props) {
  const todoItemToCreate = {
    title: 'New todo item',
    description: 'Fresh!',
  }
  return (
    <Fragment>
      <h1 className='todo-list-title'>Awesome ToDo List</h1>
      <Link className="new-task-button" to="/task/create">Create new task</Link>
      {map(props.tasks, (task) => {
        return (
          <Link to={`/task/${task.id}`} key={task.id}>
            <TodoItem
              title={task.title}
              description={task.description}
              statusButton={props.handleTodoItemButtonPressed}
              id={task.id}
            />
          </Link>
        )
      })}
    </Fragment>
  )
}

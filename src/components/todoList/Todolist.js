import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import map from 'lodash/map'
import TodoItem from '../todoItem/TodoItem'
import './todoList.scss'

export default function Todolist(props) {
  return (
    <Fragment>
      <h1 className='todo-list-title'>Awesome ToDo List</h1>
      <Link className="new-task-button" to="/task/create">Create new task</Link>
      <div className="todo-items-container">
      {map(props.tasks, (task) => {
        return (
          <Link className='link-to-todo' to={`/task/${task.id}`} key={task.id}>
            <TodoItem
              title={task.title}
              description={task.description}
              statusButton={props.handleTodoItemButtonPressed}
              id={task.id}
            />
          </Link>
        )
      })}
      </div>
    </Fragment>
  )
}

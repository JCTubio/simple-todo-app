import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import TodoItem from '../todoItem/TodoItem'

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  }
}

class TodoListContainer extends Component {
  constructor(props) {
    super(props)
    this.handleTodoItemButtonPressed = this.handleTodoItemButtonPressed.bind(this)
    console.log(props)
  }
  handleTodoItemButtonPressed = () => {
    console.log("Button pressed!")
  }

  render() {
    return (
      <Fragment>
        {map(this.props.tasks, (task) => {
          return (
            <TodoItem
              key={task.id}
              title={task.title}
              description={task.description}
              statusButton={this.handleTodoItemButtonPressed}
            />
          )
        })}
      </Fragment>
    )
  }
}

const ConnectedTodoListContainer = connect(mapStateToProps)(TodoListContainer)
export default ConnectedTodoListContainer

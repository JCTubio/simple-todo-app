import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todolist from './Todolist'
import getTodoList from '../../store/selectors/GetTodoList'
import { requestAddTodoItem, deleteTodoItem } from '../../store/actions/Actions'

function mapStateToProps(state) {
  return {
    tasks: getTodoList(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createNewTodo(todoItemToCreate) {
      dispatch(requestAddTodoItem(todoItemToCreate))
    },
    deleteTodoItem(id) {
      dispatch(deleteTodoItem(id))
    },
  }
}

class TodoListContainer extends Component {
  constructor(props) {
    super(props)
    this.handleTodoItemButtonPressed = this.handleTodoItemButtonPressed.bind(
      this
    )
  }
  handleTodoItemButtonPressed = (e, id) => {
    e.preventDefault()
    this.props.deleteTodoItem(id)
  }

  render() {
    return (
      <Todolist
        tasks={this.props.tasks}
        handleTodoItemButtonPressed={this.handleTodoItemButtonPressed}
        handleNewTodoCreation={this.props.createNewTodo}
      />
    )
  }
}

const ConnectedTodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer)
export default ConnectedTodoListContainer

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Todolist from './Todolist'
import getTodoList from '../../store/selectors/GetTodoList'
import {
  requestAddTodoItem,
  deleteTodoItem,
  requestGetTodoItems,
} from '../../store/actions/Actions'

function mapStateToProps(state) {
  return {
    tasks: getTodoList(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTodoList() {
      dispatch(requestGetTodoItems())
    },
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
    this.state = {
      tasks: [],
    }
    this.handleTodoItemButtonPressed = this.handleTodoItemButtonPressed.bind(
      this
    )
  }
  handleTodoItemButtonPressed = (e, id) => {
    e.preventDefault()
    this.props.deleteTodoItem(id)
  }

  componentDidMount() {
    this.props.getTodoList()
  }

  componentDidUpdate(prevProps) {
    if (this.props.tasks !== prevProps.tasks) {
      this.setState({
        tasks: this.props.tasks,
      })
    }
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

const ConnectedTodoListContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer))
export default ConnectedTodoListContainer

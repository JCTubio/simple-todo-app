import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewItemForm from './NewItemForm'
import { requestAddTodoItem } from '../../store/actions/Actions'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    createNewTodo(todoItemToCreate) {
      dispatch(requestAddTodoItem(todoItemToCreate))
    },
  }
}

class NewItemFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '', description: '' }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value })
  }

  handleSubmitForm = () => {
    this.props.createNewTodo(this.state)
  }

  render() {
    return (
      <NewItemForm
        title={this.state.title}
        description={this.state.description}
        handleTitleChange={this.handleTitleChange}
        handleDescriptionChange={this.handleDescriptionChange}
        handleSubmitForm={this.handleSubmitForm}
      />
    )
  }
}

const ConnectedNewItemFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewItemFormContainer)
export default ConnectedNewItemFormContainer

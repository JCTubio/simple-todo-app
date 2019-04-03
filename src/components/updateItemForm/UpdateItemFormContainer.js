import React, { Component } from 'react'
import { connect } from 'react-redux'
import getTodoList from '../../store/selectors/GetTodoList'
import * as actions from '../../store/actions/Actions'
import UpdateItemForm from './UpdateItemForm'

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id
  let item = getTodoList(state).find((itemFromList) => itemFromList.id === id)
  return {
    item,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const id = ownProps.match.params.id
  return {
    updateTodoItem(item) {
      dispatch(actions.updateTodoItem(item))
    },
  }
}

class UpdateItemFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = props.item
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
    this.props.updateTodoItem(this.state)
  }

  render() {
    return (
      <UpdateItemForm
        title={this.state.title}
        description={this.state.description}
        handleTitleChange={this.handleTitleChange}
        handleDescriptionChange={this.handleDescriptionChange}
        handleSubmitForm={this.handleSubmitForm}
      />
    )
  }
}

const ConnectedUpdateItemFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateItemFormContainer)
export default ConnectedUpdateItemFormContainer

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import getTodoItem from '../../store/selectors/GetTodoItem'
import * as actions from '../../store/actions/Actions'
import UpdateItemForm from './UpdateItemForm'
import isEmpty from 'lodash/isEmpty'

function mapStateToProps(state) {
  let item = getTodoItem(state)
  return {
    item,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateTodoItem(item) {
      dispatch(actions.updateTodoItem(item))
    },
    getTodoItemToUpdate(id) {
      dispatch(actions.requestGetSingleTodoItem(id))
    },
  }
}

class UpdateItemFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: {
        id: '',
        title: '',
        description: '',
      },
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleTitleChange = (event) => {
    this.setState({ task: { ...this.state.task, title: event.target.value } })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      task: { ...this.state.task, description: event.target.value },
    })
  }

  handleSubmitForm = () => {
    this.props.updateTodoItem(this.state.task)
    this.setState({ redirect: true })
  }

  componentDidMount() {
    this.props.getTodoItemToUpdate(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if (isEmpty(prevProps.item) && !isEmpty(this.props.item)) {
      this.setState({
        task: {
          id: this.props.item.task.id,
          title: this.props.item.task.title,
          description: this.props.item.task.description,
        },
      })
    }
  }

  render() {
    return this.props.item ? (
      <UpdateItemForm
        title={this.state.task.title}
        description={this.state.task.description}
        handleTitleChange={this.handleTitleChange}
        handleDescriptionChange={this.handleDescriptionChange}
        handleSubmitForm={this.handleSubmitForm}
      />
    ) : (
      <div>No items</div>
    )
  }
}

const ConnectedUpdateItemFormContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateItemFormContainer))
export default ConnectedUpdateItemFormContainer

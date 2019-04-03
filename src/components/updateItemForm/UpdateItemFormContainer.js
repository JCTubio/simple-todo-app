import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getTodoList from '../../store/selectors/GetTodoList'
import * as actions from '../../store/actions/Actions'

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
    updateTodoItem(item){
      dispatch(actions.updateTodoItem(item))
    }
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
      <div>
        <label htmlFor='title'>Title:</label>
        <input type='text' onChange={this.handleTitleChange} value={this.state.title} />
        <label htmlFor='description'>Description:</label>
        <textarea
          rows='2'
          name='description'
          onChange={this.handleDescriptionChange}
          value={this.state.description}
        />
        <Link to='/tasks'>
          <button> Back</button>
        </Link>
        <Link to='/tasks'>
          <button onClick={this.handleSubmitForm} value='Submit' >Submit</button>
        </Link>
      </div>
    )
  }
}

const ConnectedUpdateItemFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateItemFormContainer)
export default ConnectedUpdateItemFormContainer

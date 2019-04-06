import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NewItemForm from "./NewItemForm";
import { requestAddTodoItem } from "../../store/actions/Actions";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    createNewTodo(todoItemToCreate) {
      dispatch(requestAddTodoItem(todoItemToCreate));
    }
  };
}

class NewItemFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        title: "",
        description: ""
      },
      isShowingSubmissionError: false
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleTitleChange = event => {
    this.setState({ task: { ...this.state.task, title: event.target.value }, isShowingSubmissionError: false });
  };

  handleDescriptionChange = event => {
    this.setState({
      task: { ...this.state.task, description: event.target.value }
    });
  };

  handleSubmitForm = () => {
    if (this.state.task.title.length > 0) {
      this.props.createNewTodo(this.state.task);
    } else {
      this.setState({ isShowingSubmissionError: true });
    }
  };

  render() {
    return (
      <NewItemForm
        title={this.state.task.title}
        description={this.state.task.description}
        isShowingSubmissionError={this.state.isShowingSubmissionError}
        handleTitleChange={this.handleTitleChange}
        handleDescriptionChange={this.handleDescriptionChange}
        handleSubmitForm={this.handleSubmitForm}
      />
    );
  }
}

const ConnectedNewItemFormContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewItemFormContainer)
);
export default ConnectedNewItemFormContainer;

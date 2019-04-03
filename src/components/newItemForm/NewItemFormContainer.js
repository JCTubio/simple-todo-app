import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch){
  return {
  }
}

class NewItemFormContainer extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const ConnectedNewItemFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewItemFormContainer)
export default ConnectedNewItemFormContainer
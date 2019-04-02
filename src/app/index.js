import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import TodoListContainer from '../components/todoList/TodoListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <TodoListContainer />
        </div>
      </Provider>
    )
  }
}

export default App

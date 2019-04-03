import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { history } from '../store/history'
import TodoListContainer from '../components/todoList/TodoListContainer'
import NewItemFormContainer from '../components/newItemForm/NewItemFormContainer'
import UpdateItemFormContainer from '../components/updateItemForm/UpdateItemFormContainer'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <div className='App'>
            <Switch>
              <Route exact path='/tasks' render={() => <TodoListContainer />} />
              <Route exact path='/task/create' render={() => <NewItemFormContainer />} />
              <Route
                exact
                path='/task/:id'
                render={({ match }) => (
                  <UpdateItemFormContainer match={match} />
                )}
              />
              <Redirect to='/tasks' />
            </Switch>
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App

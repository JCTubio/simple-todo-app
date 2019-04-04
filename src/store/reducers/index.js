import { combineReducers } from 'redux'
import todoListReducer from './TodoListReducer'

const combinedReducers = combineReducers({
  todoListReducer,
})

export default combinedReducers

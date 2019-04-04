/*Action types*/
export const REQUEST_GET_TODO_ITEMS = 'REQUEST_GET_TODO_ITEMS'
export const REQUEST_GET_SINGLE_TODO_ITEM = 'REQUEST_GET_SINGLE_TODO_ITEM'
export const REQUEST_ADD_TODO_ITEM = 'REQUEST_ADD_TODO_ITEM'
export const GET_TODO_ITEMS = 'GET_TODO_ITEMS'
export const GET_SINGLE_TODO_ITEM = 'GET_SINGLE_TODO_ITEM' 
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
export const UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM'
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM'

/*Action creators*/
export function requestGetTodoItems(){
  return { type: REQUEST_GET_TODO_ITEMS }
}
export function requestGetSingleTodoItem(id){
  return { type: REQUEST_GET_SINGLE_TODO_ITEM, payload: id }
}
export function requestAddTodoItem(item) {
  return { type: REQUEST_ADD_TODO_ITEM, payload: item }
}
export function getTodoItems(items){
  return { type: GET_TODO_ITEMS, payload: items }
}
export function getSingleTodoItem(item){
  return { type: GET_SINGLE_TODO_ITEM, payload: item }
}
export function addNewItem(item) {
  return { type: ADD_TODO_ITEM, payload: item }
}
export function updateTodoItem(item) {
  return { type: UPDATE_TODO_ITEM, payload: item }
}
export function deleteTodoItem(id) {
  return { type: DELETE_TODO_ITEM, payload: id }
}
import { mapStateToProps, mapDispatchToProps } from './NewItemFormContainer'
import { REQUEST_ADD_TODO_ITEM } from '../../store/actions/Actions'
describe('The New item form', () => {
    describe('The container component', () => {
        describe('mapStateToProps', () => {
            it('should map the state to props correctly', () => {
                const appState = {}
                const componentState = mapStateToProps(appState)
                expect(componentState).toEqual(appState)
            })
        })
        describe('mapDispatchToProps', () => {
            it('should map the action dispatchers to props correctly', () => {
                const newTodoItem = {
                    id: "12",
                    title: "Some title",
                    description: "Some description",
                }
                const dispatch = jest.fn()
                const ownProps = {}
                const componentState = mapDispatchToProps(dispatch, ownProps)
                componentState.createNewTodo(newTodoItem)
                expect(dispatch.mock.calls.length).toEqual(1)
            })
        })
    })
})
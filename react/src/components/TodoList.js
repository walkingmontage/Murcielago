import React, {Component, PropTypes} from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map((todo) =>
            <Todo {...todo} key={todo.id} onClick={() => onTodoClick(todo.id)} />
        )}
    </ul>
)

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}

export default TodoList

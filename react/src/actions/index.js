let nextTodoId = 0

function addTodo(text) {
  return {
      type: 'ADD_TODO',
      text,
      id: nextTodoId++
  }
}

function setVisibilityFilter(filter) {
  return {
      type: 'SET_VISIBILITY_FILTER',
      filter
  }
}

function toggleTodo(id){
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export {
    addTodo,
    toggleTodo,
    setVisibilityFilter
}

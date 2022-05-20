import { useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { TodosContext } from '../context/TodoContext'

function TodoList() {
  const { todos, setTodos, todosFiltered, filter } = useContext(TodosContext)

  const completeTodo = (todoId) => {
    const updatedtodos = todos.map((todo) => {
      if (todo.id === todoId) todo.isComplete = !todo.isComplete
      return todo
    })

    setTodos(updatedtodos)
  }

  const markAsEditing = (todoId) => {
    const updatedtodos = todos.map((todo) => {
      if (todo.id === todoId) todo.isEditing = true
      return todo
    })

    setTodos(updatedtodos)
  }

  const updateTodo = (event, todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false
          return
        }
        todo.title = event.target.value
        todo.isEditing = false
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  const cancelEdit = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) todo.isEditing = false
      return todo
    })

    setTodos(updatedTodos)
  }

  const handleKeyDown = (event, todoId) => {
    if (event.key === 'Enter') updateTodo(event, todoId)
    if (event.key === 'Escape') cancelEdit(todoId)
  }

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  return (
    <>
      <TransitionGroup component="ul" className="todo-list">
        {todosFiltered(filter).map((todo) => (
          <CSSTransition
            key={todo.id}
            timeout={300}
            classNames="slide-vertical"
          >
            <li className="todo-item-container">
              <div className="todo-item">
                <input
                  type="checkbox"
                  onChange={() => completeTodo(todo.id)}
                  checked={todo.isComplete ? true : false}
                />

                {!todo.isEditing ? (
                  <span
                    onDoubleClick={() => markAsEditing(todo.id)}
                    className={`todo-item-label ${
                      todo.isComplete ? 'line-through' : ''
                    }`}
                  >
                    {todo.title}
                  </span>
                ) : (
                  <input
                    type="text"
                    className="todo-item-input"
                    defaultValue={todo.title}
                    autoFocus
                    onBlur={(e) => updateTodo(e, todo.id)}
                    onKeyDown={(e) => handleKeyDown(e, todo.id)}
                  />
                )}
              </div>

              <button className="x-button" onClick={() => deleteTodo(todo.id)}>
                <svg
                  className="x-button-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  )
}

export default TodoList

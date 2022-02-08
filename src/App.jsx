import { useState } from 'react'

import './App.css'

export default function App() {
  const [todoInput, setTodoInput] = useState('')

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
      isEditing: false,
    },
  ])

  const addTodo = (event) => {
    event.preventDefault()

    // If the input text is empty
    if (todoInput.trim().length === 0) return

    let newId = todos.length ? todos[todos.length - 1].id + 1 : 1
    setTodos([...todos, { id: newId, title: todoInput, isComplete: false }])
    setTodoInput('')
  }

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  const handleInput = (event) => {
    setTodoInput(event.target.value)
  }

  const completeTodo = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) todo.isComplete = !todo.isComplete
      return todo
    })

    setTodos(updatedTodos)
  }

  const markAsEditing = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) todo.isEditing = true
      return todo
    })
    setTodos(updatedTodos)
  }

  const updateTodo = (event, todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        // if the user deletes all the content
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false
          return todo
        }

        todo.title = event.target.value
        todo.isEditing = false
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  const cancelEdit = (event, todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) todo.isEditing = false
      return todo
    })

    setTodos(updatedTodos)
  }

  const handleKeyDown = (event, todoId) => {
    if (event.key === 'Enter') updateTodo(event, todoId)
    if (event.key === 'Escape') cancelEdit(event, todoId)
  }
  
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form onSubmit={addTodo}>
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            value={todoInput}
            onChange={handleInput}
          />
        </form>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={todo.id} className="todo-item-container">
              <div className="todo-item">
                <input
                  type="checkbox"
                  onChange={() => completeTodo(todo.id)}
                  checked={todo.isComplete ? true : false}
                />

                {!todo.isEditing ? (
                  <span
                    onDoubleClick={() => markAsEditing(todo.id)}
                    className={`todo-item-label ${todo.isComplete ? 'line-through' : ''}`}>
                      {todo.title}
                  </span>
                ) : (
                  <input 
                    type="text"
                    className='todo-item-input'
                    defaultValue={todo.title}
                    autoFocus
                    onBlur={(event) => updateTodo(event, todo.id)}
                    onKeyDown={(event) => handleKeyDown(event, todo.id)} />
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
          ))}
        </ul>

        <div className="check-all-container">
          <div>
            <div className="button button-scale">Check All</div>
          </div>
          <span>3 items remaining</span>
        </div>
        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button button-scale">Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  )
}

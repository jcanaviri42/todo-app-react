import { useState, useRef } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import NoTodos from './components/NoTodos'
import TodoFooter from './components/TodoFooter'

import { TodosContext } from './context/TodoContext'

export default function App() {
  const [name, setName] = useLocalStorage('name', '')
  const nameInputEl = useRef(null)
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [filter, setFilter] = useState('all')

  const todosFiltered = (filter) => {
    if (filter === 'all') return todos
    if (filter === 'active') return todos.filter((todo) => !todo.isComplete)
    if (filter === 'completed') return todos.filter((todo) => todo.isComplete)
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        todosFiltered,
        filter,
        setFilter,
      }}
    >
      <div className="todo-app-container">
        <div className="todo-app">
          <div className="name-container">
            <h2>What is your name?</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                ref={nameInputEl}
                className="todo-input"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </form>
            {name && <p className="name-label">Hello, {name}!</p>}
          </div>

          <h2>Todo App</h2>
          <TodoForm />
          {todos.length > 0 ? (
            <div>
              <TodoList />
              <TodoFooter />
            </div>
          ) : (
            <NoTodos />
          )}
        </div>
      </div>
    </TodosContext.Provider>
  )
}

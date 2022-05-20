import { useState, useRef } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import NoTodos from './components/NoTodos'
import TodoFooter from './components/TodoFooter'

import { TodosContext } from './context/TodoContext'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

export default function App() {
  const [name, setName] = useLocalStorage('name', '')
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [filter, setFilter] = useState('all')

  const nameNodeRef = useRef(null)
  const todosNodeRef = useRef(null)

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
      <div className="todo-app">
        <div className="name-container">
          <h2>What is your name?</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="todo-input"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
          <CSSTransition
            in={name.length > 0}
            timeout={300}
            classNames="slide-vertical"
            nodeRef={nameNodeRef}
            unmountOnExit
          >
            <p className="name-label" ref={nameNodeRef}>
              Hello, {name}!
            </p>
          </CSSTransition>
        </div>

        <h2>Todo App</h2>
        <TodoForm />

        <SwitchTransition mode="out-in">
          <CSSTransition
            key={todos.length > 0}
            timeout={300}
            classNames="slide-vertical"
            nodeRef={todosNodeRef}
            unmountOnExit
          >
            {todos.length > 0 ? (
              <div ref={todosNodeRef}>
                <TodoList />
                <TodoFooter />
              </div>
            ) : (
              <div ref={todosNodeRef}>
                <NoTodos />
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </TodosContext.Provider>
  )
}

import { useState } from 'react'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import NoTodos from './components/NoTodos'
import TodoFooter from './components/TodoFooter'

export default function App() {
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

  const addTodo = (todoText) => {
    let newId = todos.length ? todos[todos.length - 1].id + 1 : 1
    setTodos([
      ...todos,
      { id: newId, title: todoText, isComplete: false, isEditing: false },
    ])
  }

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  const completeTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) todo.isComplete = !todo.isComplete
      return todo
    })

    setTodos(updatedTodos)
  }

  const markAsEditing = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) todo.isEditing = true
      return todo
    })
    setTodos(updatedTodos)
  }

  const updateTodo = (event, todoId) => {
    const updatedTodos = todos.map((todo) => {
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
    const updatedTodos = todos.map((todo) => {
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
        <TodoForm addTodo={addTodo} />

        {todos.length > 0 ? (
          <>
            <TodoList
              todos={todos}
              completeTodo={completeTodo}
              markAsEditing={markAsEditing}
              updateTodo={updateTodo}
              handleKeyDown={handleKeyDown}
              deleteTodo={deleteTodo}
            />
            <TodoFooter />
          </>
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  )
}

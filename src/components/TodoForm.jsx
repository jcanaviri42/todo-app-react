import { useContext } from 'react'
import { useState } from 'react'

import { TodosContext } from '../context/TodoContext'

function TodoForm() {
  const { todos, setTodos } = useContext(TodosContext)
  const [todoInput, setTodoInput] = useState('')

  const handleInput = (event) => {
    setTodoInput(event.target.value)
  }

  const addTodo = (event) => {
    event.preventDefault()

    // If the input text is empty
    if (todoInput.trim().length === 0) return
    let newId = todos.length ? todos[todos.length - 1].id + 1 : 1

    setTodos([
      ...todos,
      { id: newId, title: todoInput, isComplete: false, isEditing: false },
    ])
    setTodoInput('')
  }

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        className="todo-input"
        placeholder="What do you need to do?"
        value={todoInput}
        onChange={handleInput}
      />
    </form>
  )
}

export default TodoForm

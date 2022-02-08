import { useState } from 'react'

export default function TodoForm({ addTodo }) {
  const [todoInput, setTodoInput] = useState('')

  const handleInput = (event) => {
    setTodoInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // If the input text is empty
    if (todoInput.trim().length === 0) return

    addTodo(todoInput)
    setTodoInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
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

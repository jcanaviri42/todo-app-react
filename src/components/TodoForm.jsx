import { useContext, useState } from 'react'

import { TodosContext } from '../context/TodoContext'

function TodoForm() {
  const { todos, setTodos } = useContext(TodosContext)
  const [todoInput, setTodoInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()

    // If the input text is empty
    if (todoInput.trim().length === 0) return

    // Calculate the new id
    let newId = todos.length ? todos[todos.length - 1].id + 1 : 1
    const newTodo = { id: newId, title: todoInput, isComplete: false, isEditing: false }

    setTodos([...todos, newTodo])
    setTodoInput('')
  }

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        className="todo-input"
        placeholder="What do you need to do?"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
    </form>
  )
}

export default TodoForm

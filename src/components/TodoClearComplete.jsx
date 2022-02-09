import { useContext } from 'react'
import { TodosContext } from '../context/TodoContext'

function TodoClearComplete() {
  const { todos, setTodos } = useContext(TodosContext)

  const clearComplete = () => {
    setTodos([...todos].filter((todo) => !todo.isComplete))
  }

  return (
    <div>
      <button className="button button-scale" onClick={clearComplete}>
        Clear completed
      </button>
    </div>
  )
}

export default TodoClearComplete

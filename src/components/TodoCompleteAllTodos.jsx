import { useContext } from 'react'
import { TodosContext } from '../context/TodoContext'

function TodoCompleteAllTodos() {
  const { todos, setTodos } = useContext(TodosContext)

  const completeAllTodos = () => {
    const updatedTodos = todos.map(todo => { 
      todo.isComplete = true
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <div className="button button-scale" onClick={completeAllTodos}>
        Check All
      </div>
    </div>
  )
}

export default TodoCompleteAllTodos

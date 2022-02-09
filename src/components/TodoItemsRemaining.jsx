import { useContext, useMemo } from 'react'

import { TodosContext } from '../context/TodoContext'

function TodoItemsRemaining() {
  const { todos } = useContext(TodosContext)

  const remainingCalculation = () => {
    return todos.filter(todo => !todo.isComplete).length
  }

  const remaining = useMemo(remainingCalculation, [todos])

  return <span>{remaining} items remaining</span>
}

export default TodoItemsRemaining

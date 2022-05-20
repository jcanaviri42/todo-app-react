import { useToggle } from '../hooks/useToggle'

import TodoClearComplete from './TodoClearComplete'
import TodoCompleteAllTodos from './TodoCompleteAllTodos'
import TodoFilters from './TodoFilters'
import TodoItemsRemaining from './TodoItemsRemaining'

function TodoFooter() {
  const [isFeaturesOneVisible, setFeaturesOneVisible] = useToggle()
  const [isFeaturesTwoVisible, setFeaturesTwoVisible] = useToggle(false)

  return (
    <>
      <div className="toggles-container">
        <button onClick={setFeaturesOneVisible} className="button button-scale mr-1">
          Features One Toggle
        </button>
        <button onClick={setFeaturesTwoVisible} className="button button-scale">
          Features Two Toggle
        </button>
      </div>

      {isFeaturesOneVisible && (
        <div className="check-all-container">
          <TodoCompleteAllTodos />
          <TodoItemsRemaining />
        </div>
      )}

      {isFeaturesTwoVisible && (
        <div className="other-buttons-container">
          <TodoFilters />
          <TodoClearComplete />
        </div>
      )}
    </>
  )
}

export default TodoFooter

import PropTypes from 'prop-types'

import TodoClearComplete from './TodoClearComplete'
import TodoCompleteAllTodos from './TodoCompleteAllTodos'
import TodoFilters from './TodoFilters'
import TodoItemsRemaining from './TodoItemsRemaining'

import { useToggle } from '../hooks/useToggle'

function TodoFooter({
  remaining,
  completeAllTodos,
  clearComplete,
  todosFiltered,
  filter,
  setFilter,
}) {
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
          <TodoCompleteAllTodos completeAllTodos={completeAllTodos} />
          <TodoItemsRemaining remaining={remaining} />
        </div>
      )}

      {isFeaturesTwoVisible && (
        <div className="other-buttons-container">
          <TodoFilters
            todosFiltered={todosFiltered}
            filter={filter}
            setFilter={setFilter}
          />
          <TodoClearComplete clearComplete={clearComplete} />
        </div>
      )}
    </>
  )
}

TodoFooter.propTypes = {
  remaining: PropTypes.number.isRequired,
  completeAllTodos: PropTypes.func.isRequired,
  clearComplete: PropTypes.func.isRequired,
  todosFiltered: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
}

export default TodoFooter

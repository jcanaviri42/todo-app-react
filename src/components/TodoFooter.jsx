import PropTypes from 'prop-types'

import TodoClearComplete from './TodoClearComplete'
import TodoCompleteAllTodos from './TodoCompleteAllTodos'
import TodoFilters from './TodoFilters'
import TodoItemsRemaining from './TodoItemsRemaining'

function TodoFooter({
  remaining,
  completeAllTodos,
  clearComplete,
  todosFiltered,
  filter,
  setFilter
}) {
  

  return (
    <>
      <div className="check-all-container">
        <TodoCompleteAllTodos completeAllTodos={completeAllTodos} />
        <TodoItemsRemaining remaining={remaining} />
      </div>
      <div className="other-buttons-container">
        <TodoFilters
          todosFiltered={todosFiltered}
          filter={filter}
          setFilter={setFilter}
        />
        <TodoClearComplete clearComplete={clearComplete} />
      </div>
    </>
  )
}

TodoFooter.propTypes = {
  remaining: PropTypes.number.isRequired,
  completeAllTodos: PropTypes.func.isRequired,
  clearComplete: PropTypes.func.isRequired,
  todosFiltered: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default TodoFooter

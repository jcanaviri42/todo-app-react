import PropTypes from 'prop-types'

function TodoCompleteAllTodos({ completeAllTodos }) {
  return (
    <div>
      <div className="button button-scale" onClick={completeAllTodos}>
        Check All
      </div>
    </div>
  )
}

TodoCompleteAllTodos.propTypes = {
  completeAllTodos: PropTypes.func.isRequired
}

export default TodoCompleteAllTodos

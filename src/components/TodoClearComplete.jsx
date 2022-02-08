import PropTypes from 'prop-types'

function TodoClearComplete({ clearComplete }) {
  return (
    <div>
      <button className="button button-scale" onClick={clearComplete}>
        Clear completed
      </button>
    </div>
  )
}

TodoClearComplete.propTypes = {
  clearComplete: PropTypes.func.isRequired
}

export default TodoClearComplete

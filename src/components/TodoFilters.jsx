import PropTypes from 'prop-types'

function TodoFilters({ todosFiltered, filter, setFilter }) {
  const handleClickButton = (name) => {
    setFilter(name)
    todosFiltered(name)
  }

  return (
    <div>
      <button
        onClick={() => handleClickButton('all')}
        className={`button filter-button ${
          filter === 'all' ? 'filter-button-active' : ''
        } `}
      >
        All
      </button>
      <button
        onClick={() => handleClickButton('active')}
        className={`button filter-button ${
          filter === 'active' ? 'filter-button-active' : ''
        } `}
      >
        Active
      </button>
      <button
        onClick={() => handleClickButton('completed')}
        className={`button filter-button ${
          filter === 'completed' ? 'filter-button-active' : ''
        } `}
      >
        Completed
      </button>
    </div>
  )
}

TodoFilters.propTypes = {
  todosFiltered: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default TodoFilters

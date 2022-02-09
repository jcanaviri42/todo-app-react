import PropTypes from 'prop-types'

function TodoList({
  todosFiltered,
  filter,
  completeTodo,
  markAsEditing,
  updateTodo,
  handleKeyDown,
  deleteTodo,
}) {
  return (
    <ul className="todo-list">
      {todosFiltered(filter).map((todo) => (
        <li key={todo.id} className="todo-item-container">
          <div className="todo-item">
            <input
              type="checkbox"
              onChange={() => completeTodo(todo.id)}
              checked={todo.isComplete ? true : false}
            />

            {!todo.isEditing ? (
              <span
                onDoubleClick={() => markAsEditing(todo.id)}
                className={`todo-item-label ${
                  todo.isComplete ? 'line-through' : ''
                }`}
              >
                {todo.title}
              </span>
            ) : (
              <input
                type="text"
                className="todo-item-input"
                defaultValue={todo.title}
                autoFocus
                onBlur={(e) => updateTodo(e, todo.id)}
                onKeyDown={(e) => handleKeyDown(e, todo.id)}
              />
            )}
          </div>

          <button className="x-button" onClick={() => deleteTodo(todo.id)}>
            <svg
              className="x-button-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todosFiltered: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  markAsEditing: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoList

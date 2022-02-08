export default function TodoCompleteAllTodos({ completeAllTodos }) {
  return (
    <div>
      <div className="button button-scale" onClick={completeAllTodos}>
        Check All
      </div>
    </div>
  )
}

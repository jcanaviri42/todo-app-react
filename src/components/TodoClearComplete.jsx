export default function TodoClearComplete({ clearComplete }) {
  return (
    <div>
      <button className="button button-scale" onClick={clearComplete}>
        Clear completed
      </button>
    </div>
  )
}

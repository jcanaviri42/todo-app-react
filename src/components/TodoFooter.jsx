export default function TodoFooter() {
  return (
    <>
      <div className="check-all-container">
        <div>
          <div className="button button-scale">Check All</div>
        </div>
        <span>3 items remaining</span>
      </div>
      <div className="other-buttons-container">
        <div>
          <button className="button filter-button filter-button-active">
            All
          </button>
          <button className="button filter-button">Active</button>
          <button className="button filter-button">Completed</button>
        </div>
        <div>
          <button className="button button-scale">Clear completed</button>
        </div>
      </div>
    </>
  )
}

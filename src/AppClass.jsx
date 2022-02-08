import { Component } from 'react'

import './App.css'

export default class AppClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Finish React Series',
          isComplete: false,
        },
        {
          id: 2,
          title: 'Go Grocery',
          isComplete: true,
        },
        {
          id: 3,
          title: 'Take over world',
          isComplete: false,
        },
      ],
      todoInput: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.todoInput === '') return

    let newId = this.state.todos[this.state.todos.length - 1].id + 1
    let newTodo = {id: newId, title: this.state.todoInput, isComplete: false}
    this.setState({
      todos: [...this.state.todos, newTodo],
      todoInput: ''
    })
  }
  
  deleteTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    })
  }

  handleChangeInput = (e) => {
    this.setState({ todoInput: e.target.value })
  }

  render() {
    return (
      <div className="todo-app-container">
        <div className="todo-app">
          <h2>Todo App</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="todo-input"
              placeholder="What do you need to do?"
              value={this.state.todoInput}
              onChange={this.handleChangeInput}
            />
          </form>

          <ul className="todo-list">
            {this.state.todos.map((todo, index) => (
              <li key={todo.id} className="todo-item-container">
                <div className="todo-item">
                  <input type="checkbox" />
                  <span className="todo-item-label">{todo.title}</span>
                </div>

                <button className="x-button" onClick={() => this.deleteTodo(todo.id)}>
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
        </div>
      </div>
    )
  }
}

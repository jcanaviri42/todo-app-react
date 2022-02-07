import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Another from './Another'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Another />
        <Counter initialCount={0}/>
        <p>
          <button type="button" onClick={() => { setCount(prevCount => prevCount + 1); setCount(prevCount => prevCount + 1) } }>
            count is: {count}
          </button>

          <button type='button' onClick={() => setCount(count=> count - 1)}>Decrement</button>
        </p>
        <p style={someStyle}>{2 * 5}</p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App

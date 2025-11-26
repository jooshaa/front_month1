import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setInterval(() => {
      setCount(c => c + 1)
    }, 1000) 
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App;
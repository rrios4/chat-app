import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-100'>
      <p>Hello World!</p>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import Contactme from './components/Contactme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Contactme />
    </div>
  )
}

export default App

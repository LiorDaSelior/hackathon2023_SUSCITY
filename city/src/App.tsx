import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PersonalDetails from './component/PersonalDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PersonalDetails></PersonalDetails>
      <h2>bla</h2>
    </div>
  )
}

export default App

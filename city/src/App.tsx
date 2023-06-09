import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PersonalDetails from './component/PersonalDetails'
import LoginPage from './pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoginPage></LoginPage>
      {/* <PersonalDetails></PersonalDetails> */}
    </div>

  )
}

export default App;
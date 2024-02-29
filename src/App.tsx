import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Router';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes />

    </>
  )
}

export default App

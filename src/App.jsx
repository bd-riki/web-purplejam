import './App.css'
import { useState } from 'react'
import NavBar from './NavBar'
import PageContent from './PageContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <PageContent/>
    </>
  )
}

export default App

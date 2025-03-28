import { useState } from 'react'
import './App.css'
import Footer from './Footer_Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Footer/>
    </>
  )
}

export default App

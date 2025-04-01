import { useState } from 'react'
import './App.css'
import { Navbar } from './Nav/Navbar'
import { Testimonial } from './Pages/Testimonial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Testimonial />
    </>
  )
}

export default App

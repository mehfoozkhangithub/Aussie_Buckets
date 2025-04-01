import { useState } from 'react'
import './App.css'
import Footer from './Footer_Component/Footer'
import { Whyab } from './Whyab_Component/whyab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Whyab/>
      {/* <Footer/> */}
    </>
  )
}

export default App

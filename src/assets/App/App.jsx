import { useState } from 'react'
import './App.scss'
import HeaderLogOut from '../HeaderLogOut/HeaderLogOut.jsx'
import Container  from 'react-bootstrap/Container'
import SignUp from '../SIgnUp/SignUp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderLogOut />
      <SignUp />
    </>
  )
}

export default App

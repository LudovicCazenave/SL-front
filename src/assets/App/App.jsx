import { useState } from 'react'
import './App.scss'
import HeaderLogOut from '../HeaderLogOut/HeaderLogOut.jsx'
import Container  from 'react-bootstrap/Container'
import SignUp from '../SIgnUp/SignUp.jsx'
import Tagline from '../Tagline/Tagline.jsx'
import Events from '../Events/Events.jsx'
import Footer from '../Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderLogOut />
      <main>
        <SignUp />
        <Tagline />
        <Events />
      </main>
      <Footer />
    </>
  )
}

export default App

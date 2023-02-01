import { useState } from 'react'
import Contents from './components/contents'
import Navigation from './components/Navigation'
import Contact_Email from './components/Contact'
import './index.css'

function App() {
  const [Home, setHome] = useState(false)
  const [About, setAbout] = useState(false)
  const [Works, setWorks] = useState(false)
  const [Contact, setContact] = useState(false)
  const [Resume, setResume] = useState(true)
 

  function handleHome(){
    setHome(true)

    setAbout(false)
    setWorks(false)
    setContact(false)
    setResume(false)
  }  

  function handleAbout(){
    setAbout(true)

    setHome(false)
    setWorks(false)
    setContact(false)
    setResume(false)
  }

  function handleWorks(){
    setWorks(true)

    setAbout(false)
    setHome(false)
    setContact(false)
    setResume(false)
  }

  function handleContact(){
    setContact(true)

    setHome(false)
    setWorks(false)
    setAbout(false)
    setResume(false)
  }

  function handleResume(){
    setResume(true)

    setHome(false)
    setWorks(false)
    setContact(false)
    setAbout(false)
  }

 
  return (
    <div className="App">
      <Navigation 
      handleHome={handleHome} 
      handleAbout={handleAbout} 
      handleWorks={handleWorks}
      handleContact={handleContact}
      handleResume={handleResume}
      />
      <Contents
      Home={Home}
      About={About}
      Works={Works}
      Contact={Contact}
      Resume={Resume}
      Contact_Email={Contact_Email}
 
      />

    </div>
  )
}

export default App

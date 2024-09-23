
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import ContactMe from './components/ContactMe'

function App() {

  return (
    <>
      {/* <div style={{padding:'30px'}}>I am {count}</div> */}
      <Navbar />
      <Home />
      <ScrollTop showBelow='300'/>
      <Education />
      <Skills />
      <Projects />  
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default App

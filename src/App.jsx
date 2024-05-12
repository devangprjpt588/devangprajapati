import './App.css'
import './components/common.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App

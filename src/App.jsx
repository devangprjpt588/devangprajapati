import './App.css'
import './components/common.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Navbar/>
      {/* <Footer/> */}
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App

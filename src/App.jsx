import './App.css'
import './components/common.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Callout from './components/Callout';
import FollowMe from './components/FollowMe';

function App() {

  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <FollowMe/>
      <Home/>
      <About/>
      <Skills/>
      <Callout/>
      <Contact/>
    </>
  )
}

export default App

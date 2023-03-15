import { Routes, Route, Link } from 'react-router-dom'
import MyNavbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Compositions from './components/compositions/Compositions'
import Bio from './components/bio/Bio'
import Audio from './components/audio/Audio'
import Gallery from './components/gallery/Gallery'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Copyright from './components/copyright/Copyright'
import './App.css'

function App() {
  const images = ['src/assets/LightExists.jpg', 'src/assets/Triptych.jpg', 'src/assets/Kickstarter.jpg','src/assets/Trio.jpg', 'src/assets/Premiere.jpg', 'src/assets/markpurple.jpg',];

  return (
    <>
    <div className="App">
      <div>
        <h1>Mark Charles Smith</h1>
        <p>Composer, Guitarist, Pianist</p>
        <div className='App-header'>
          <MyNavbar />
        </div>
      </div>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/bio" element={<Bio />}/>
      <Route path="/compositions" element={<Compositions />}/>
      <Route path="/audio" element={<Audio />}/>
      <Route path="/gallery" element={<Gallery images={images}/>}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </div>
    <div className='App-footer'>
      <Footer />
    </div>
    <div className='App-copyright'>
      <Copyright />
    </div>
    </>
  )
}

export default App

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
import Store from './components/store/Store'
import './App.css'
import { images, compositionsList } from './data'

function App() {
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
      <Route path="/compositions" element={<Compositions compositions={compositionsList} />}/>
      <Route path="/audio" element={<Audio />}/>
      <Route path="/gallery" element={<Gallery images={images}/>}/>
      <Route path="/lessons" element={<Contact />}/>
      <Route path="/store" element={<Store />}/>
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

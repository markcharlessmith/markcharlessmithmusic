import React from 'react'
import './audio.css'

const Audio = () => {
  return (
    <div className='Audio'>
      <h4>Aspens, by Mark Charles Smith</h4>
      <p>All music composed and performed by: Mark Charles Smith<br></br>
      Featuring: Laura Boswell, Carey Harwood, and Kami Rowan, guitars<br></br>
      Recorded in Greensboro, NC, April-June 2013<br></br>
      Recording Engineer: Edd Kerr // Mixing and Mastering: Michael DeLalla, Falling Mountain Studios<br></br>
      Guitars by Jeremy Clark (52 Instrument Co.) and Kenny Hill</p>

      <div className='Audio-iframe'>
      <iframe src="https://open.spotify.com/embed/album/6CEghG22tE3ZIZpgCuiPCm?utm_source=generator" width="50%" height="970" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  )
}





export default Audio

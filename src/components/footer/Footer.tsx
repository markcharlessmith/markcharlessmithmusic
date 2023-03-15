import { RiInstagramFill, RiSpotifyFill, RiYoutubeFill } from 'react-icons/ri';
import { FaBandcamp } from 'react-icons/fa';
import { IoLogoVenmo } from 'react-icons/io5';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
      <p><a href="https://open.spotify.com/artist/3ahbNzDONGv1c0cZFO1IA4"><RiSpotifyFill size='40'/></a></p>
      <p><a href="https://www.instagram.com/marktrek_/"><RiInstagramFill size='40'/></a></p>
      <p><a href="https://www.youtube.com/channel/UC6n4b0WQ5YfPp-a-gNSFCDg"><RiYoutubeFill size='40'/></a></p>
      <p><a href="https://markcharlessmith.bandcamp.com/"><FaBandcamp size='35'/></a></p>
      <p><a href="https://venmo.com/MCS913"><IoLogoVenmo size='35'/></a></p>
      </div>
    </div>
  )
}

export default Footer

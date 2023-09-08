import React from 'react'
import './store.css'
import image from '../../assets/Kickstarter.jpg';

const Store: React.FC = () => {
  return (
    <div className='store'>
      <div className='store-header'>
        <h1>Welcome to the store!</h1>
        </div>
      <div className='store-body'>
        <div className='store-body-left'>
          <p>Coming soon!</p>
        </div>
        <div className='store-body-right'>
          <img src={image} alt='Kickstarter' />
        </div>
      </div>
    </div>
  )
  
}

export default Store;

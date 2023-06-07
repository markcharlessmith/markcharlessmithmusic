import React from 'react'
import './store.css'

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
          <img src='https://images.unsplash.com/photo-1612835362596-4b0b0e2b5b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' alt='store'/>
        </div>
      </div>
    </div>
  )
  
}

export default Store;

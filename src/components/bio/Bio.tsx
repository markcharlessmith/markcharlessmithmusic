import React from 'react'
import './bio.css'
import { bio } from '../../data'

const Bio: React.FC = () => {
  const { paragraphs } = bio[0]
  return (
    <>
     <h4 id='Bio-header'>About me</h4>
      <div className='Bio'>
      <div className='Bio-text'>
      {paragraphs.map((paragraph, index) => (
        <>
          <p key={index}>{paragraph}</p>
          <br />
        </>
      ))}
      </div>
    </div>
    </>
  )
}

export default Bio

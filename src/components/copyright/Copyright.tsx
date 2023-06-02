import './copyright.css';

const Copyright = () => {
  let year = new Date().getFullYear();

  return (
    <div className='copyright'>
      © Copyright {year} Mark Charles Smith.  All rights reserved.
    </div>
    
  )
}

export default Copyright

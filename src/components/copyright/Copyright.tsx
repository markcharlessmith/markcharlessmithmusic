import './copyright.css';

const Copyright: React.FC = () => {
  let year = new Date().getFullYear();

  return (
    <div className='copyright'>
      © Copyright {year} Mark Charles Smith.  All rights reserved.
    </div>
    
  )
}

export default Copyright

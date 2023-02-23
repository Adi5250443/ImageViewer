import React from 'react';
import './Viewerbox.css';

const Viewerbox = ({clickedImg,setClickedImg}) => {
  return (
    
      <div className="img-container">
        <img src={clickedImg} />
      </div>
    
  )
}


export default Viewerbox

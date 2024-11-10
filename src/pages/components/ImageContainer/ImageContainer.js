import React from 'react';
import './ImageContainer.css';
import MainImg from '../../../assets/icons/categ-item.jpg'

const ImageContainer = ({
    title,
    description
}) => {
  return (
    <div className='image-container'>
    <img 
    
    style={{
        height: '32rem',
        width: '100%',
        objectFit: 'cover'
    }}
    src={MainImg}
    />
    <div className='overlay-section'>
        <div className='title-desc-section'>
        <div className='title'>{title}</div>
        <div className='desc'>{description}</div>
        </div>
      
    </div>
    </div>
  )
}

export default ImageContainer
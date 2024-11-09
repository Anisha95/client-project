import React from 'react';
import './ImageDisplay.css';

const ImageDisplay = ({
    imagesList
}) => {
    let imagesListBelow = imagesList?.slice(1, imagesList?.length);
    imagesListBelow = imagesListBelow?.slice(0, 4);
  return (
    <div className='image-display-container'>
         <img 
    style={{
        height: '22rem',
        width: '41rem',
        borderRadius: '10.42px'
    }}
    src={imagesList[0]}
    />
    <div className='image-list'>
        {imagesListBelow?.map((imgItem, index) => {
            return (
           <div className='image-wrapper'> 
            <img src={imgItem} 
                style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: '6px',
                }}
                />
                {index === imagesListBelow?.length - 1 && 
                (<div className='view-more-text'>
                    View More
                </div>)}
                </div>
                )
        })}
    </div>
    </div>
  )
}

export default ImageDisplay
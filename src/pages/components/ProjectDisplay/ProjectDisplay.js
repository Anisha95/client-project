import React from 'react';
import './ProjectDisplay.css';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';

const ProjectDisplay = ({
    imagesList,
    projectDetails
}) => {
  return (
    <div className='project-display-section'>
        <ImageDisplay imagesList={imagesList} />

    </div>
  )
}

export default ProjectDisplay
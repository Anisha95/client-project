import React from 'react';
import './ProjectDisplay.css';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import Details from './components/Details/Details';

const ProjectDisplay = ({
    imagesList,
    projectDetails
}) => {
  return (
    <div className='project-display-section'>
        <ImageDisplay imagesList={imagesList} />
        <Details projectDetails={projectDetails} />
    </div>
  )
}

export default ProjectDisplay
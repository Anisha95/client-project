import React from 'react';
import './Details.css';

const Details = ({
    projectDetails
}) => {

  return (
    <div className='details-wrapper'>
      <div className='details-title'>Project Details</div>
      <div className='details-content'>
        {Object.keys(projectDetails)?.map((detailItem, value) => {
        const details =  projectDetails[detailItem]
        return <div className={`detail-item-wrapper ${value % 2 === 1 && 'item-bg' } ${value === Object.keys(projectDetails)?.length - 1 && 'no-border'}`}>
            <div className='img-label'>
                <div className='circled-img-container'>
                <img src={details[0]} className='detail-img' />
                </div>
              
                <div className='item-label'>{details[1]}</div>
            </div>
            <div className='detail-value'>{details[2]}</div>
        </div>}
        )}
      </div>
    </div>
  )
}

export default Details
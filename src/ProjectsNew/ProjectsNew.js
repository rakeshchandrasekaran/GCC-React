import React from 'react';
import L from "../utils/localization";
import './ProjectsNew.css';

const ProjectsNew = () => {
  return (
    <div id='projects-page'>
      <div className='projects-page-header'>
        <h2>{L.t('projects.firstRowHeaders')}</h2>
        <div className="hr-line-center" />
        <p>{L.t('projects.firstRowDescription')}</p>
      </div>
      <div className='projects-grid-section'>
        {
          L.t('projects.secondRowContent') && L.t('projects.secondRowContent').map((data) => {
            return (
              <div className='projects-grid-card'>
                <img src={data.image}/>
                <p>{data.host}</p>
                <h3>{data.title}</h3>
              </div>
            )
          })
        }
      </div>
      <div className='projects-collaborate-section'>
        <div className='projects-collaborate-content'>
          <h3>{L.t('projects.thirdRowHeader')}</h3>
          <button>{L.t('projects.thirdRowButton')}</button>
        </div>
      </div>
    </div>
  )
};

export default ProjectsNew;
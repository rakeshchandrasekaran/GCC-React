import React from 'react';
import L from "../utils/localization";
import './ProjectsNew.css';
import {Tab, Tabs} from "react-bootstrap";

const ProjectsNew = () => {
  return (
    <div id='projects-page'>
      <div className='projects-page-header'>
        <h2>{L.t('projects.firstRowHeaders')}</h2>
        <div className="hr-line-center" />
        <p>{L.t('projects.firstRowDescription')}</p>
      </div>
      <Tabs defaultActiveKey="0" id="uncontrolled-tab-example">
        <Tab eventKey={0} title={'Completed'}>
          {
            L.t('projects.secondRowContent') && L.t('projects.secondRowContent.completed').map((data) => {
              return (
                <div className='projects-grid-card'>
                  <img alt='' src={data.image}/>
                  <p>{data.host}</p>
                  <h3>{data.title}</h3>
                </div>
              )
            })
          }
        </Tab>
        <Tab eventKey={1} title={'Ongoing'}>
          {
            L.t('projects.secondRowContent') && L.t('projects.secondRowContent.ongoing').map((data) => {
              return (
                <div className='projects-grid-card'>
                  <img alt='' src={data.image}/>
                  <p>{data.host}</p>
                  <h3>{data.title}</h3>
                </div>
              )
            })
          }
        </Tab>
      </Tabs>
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

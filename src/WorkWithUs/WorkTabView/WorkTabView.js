import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import '../WorkWithUs.css'
import WorkCategoryDetails from "../WorkCategoryDetails";
import L from '../../utils/localization';

const WorkTabView = () => {

  return (
    <Tabs defaultActiveKey="0" id="uncontrolled-tab-example">
      {
        L.t('workWithUs.categories').map((category, index) => {
          return (
            <Tab eventKey={index} title={category.title}>
              <WorkCategoryDetails content={category}/>
            </Tab>
          )
        })
      }
    </Tabs>
  );
};

export default WorkTabView;
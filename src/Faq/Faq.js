import React from 'react';
import './Faq.css';
import FaqOpeningBanner from "./FaqOpeningBanner";
import MoreFaqSection from "./MoreFaqSection";
import QaSection from "./QaSection";

const Faq = () => {

  return (
    <React.Fragment>
      <FaqOpeningBanner />
      <QaSection />
      <MoreFaqSection />
    </React.Fragment>
  );
};

export default Faq;
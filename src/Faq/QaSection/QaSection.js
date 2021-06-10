import React from "react";
import QaQuestion from "./QaQuestion";
import './QaSection.css';

const QaSection = () => {

  let faqSplit1QuestionsAndAnswers = [
    {
      question: 'What can we offer ?' ,
      answer: 'Chennai Innovation Hub offers various opportunities like',
      answerPoints: [
        'Platform to pitch and mentor your idea.',
        'Enable real time data sharing.',
        'Provide existing society to work and implement the project.',
        'Partnerships and outreach for ecosystem enablement.',
        'Capacity enhancement and knowledge services.',
        'Change management and thought leadership.',
        'Advisory on innovation specialisation & responsive regulation for different verticals.',
        'City will act as a living laboratory to build POC.'
      ],
      readMore: 'https://www.google.com/'
    },
    {
      question: 'What can we offer ?' ,
      answer: 'Chennai Innovation Hub offers various opportunities like',
      answerPoints: [
        'Platform to pitch and mentor your idea.',
        'Enable real time data sharing.',
        'Provide existing society to work and implement the project.',
        'Partnerships and outreach for ecosystem enablement.',
        'Capacity enhancement and knowledge services.',
        'Change management and thought leadership.',
        'Advisory on innovation specialisation & responsive regulation for different verticals.',
        'City will act as a living laboratory to build POC.'
      ],
    },
    {
      question: 'What can we offer ?' ,
      answer: 'Chennai Innovation Hub offers various opportunities like',
      answerPoints: [
        'Platform to pitch and mentor your idea.',
        'Enable real time data sharing.',
        'Provide existing society to work and implement the project.',
        'Partnerships and outreach for ecosystem enablement.',
        'Capacity enhancement and knowledge services.',
        'Change management and thought leadership.',
        'Advisory on innovation specialisation & responsive regulation for different verticals.',
        'City will act as a living laboratory to build POC.'
      ],
    },
    {
      question: 'What can we offer ?' ,
      answer: 'Chennai Innovation Hub offers various opportunities like',
      answerPoints: [
        'Platform to pitch and mentor your idea.',
        'Enable real time data sharing.',
        'Provide existing society to work and implement the project.',
        'Partnerships and outreach for ecosystem enablement.',
        'Capacity enhancement and knowledge services.',
        'Change management and thought leadership.',
        'Advisory on innovation specialisation & responsive regulation for different verticals.',
        'City will act as a living laboratory to build POC.'
      ],
    },
    {
      question: 'What can we offer ?' ,
      answer: 'Chennai Innovation Hub offers various  like',
    },
  ];

  let faqSplit2QuestionsAndAnswers = [
    {
      question: 'What can we offer ?' ,
      answer: 'Chennai Innovation Hub offers various opportunities like',
      answerPoints: [
        'Platform to pitch and mentor your idea.',
        'Enable real time data sharing.',
        'Provide existing society to work and implement the project.',
        'Partnerships and outreach for ecosystem enablement.',
        'Capacity enhancement and knowledge services.',
        'Change management and thought leadership.',
        'Advisory on innovation specialisation & responsive regulation for different verticals.',
        'City will act as a living laboratory to build POC.'
      ],
    },
    {
      question: 'What can we offer ?' ,
      answer: 'Chennai Innovation Hub offers various opportunities like',
      answerPoints: [
        'Platform to pitch and mentor your idea.',
        'Enable real time data sharing.',
        'Provide existing society to work and implement the project.',
        'Partnerships and outreach for ecosystem enablement.',
        'Capacity enhancement and knowledge services.',
        'Change management and thought leadership.',
        'Advisory on innovation specialisation & responsive regulation for different verticals.',
        'City will act as a living laboratory to build POC.'
      ],
    },
    {
      question: 'What can we offer ?' ,
      answer: 'Chennai Innovation Hub offers various opportunities like',
      answerPoints: [
        'Platform to pitch and mentor your idea.',
        'Enable real time data sharing.',
        'Provide existing society to work and implement the project.',
        'Partnerships and outreach for ecosystem enablement.',
        'Capacity enhancement and knowledge services.',
        'Change management and thought leadership.',
        'Advisory on innovation specialisation & responsive regulation for different verticals.',
        'City will act as a living laboratory to build POC.'
      ],
    },
    {
      question: 'What can we offer ?' ,
      answer: 'Chennai Innovation Hub offers various opportunities like',
      answerPoints: [
        'Platform to pitch and mentor your idea.',
        'Enable real time data sharing.',
        'Provide existing society to work and implement the project.',
        'Partnerships and outreach for ecosystem enablement.',
        'Capacity enhancement and knowledge services.',
        'Change management and thought leadership.',
        'Advisory on innovation specialisation & responsive regulation for different verticals.',
        'City will act as a living laboratory to build POC.'
      ],
      readMore: 'google.com'

    },
    {
      question: 'What can we offer ?' ,
      answer: 'Chennai Innovation Hub offers various  like',
    },
  ];


  return (
    <div className="faqSection">
      <div className="faq-split" id="faqSplit1">
        {
          faqSplit1QuestionsAndAnswers.map((faqData) => {
            return <QaQuestion faqData={faqData} />
          })
        }
      </div>
      <div className="faq-split" id="faqSplit2">
        {
          faqSplit2QuestionsAndAnswers.map((faqData) => {
            return <QaQuestion faqData={faqData} />
          })
        }
      </div>
    </div>
  );
};

export default QaSection;
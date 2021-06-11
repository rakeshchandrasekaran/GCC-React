import React from "react";
import QaQuestion from "./QaQuestion";
import './QaSection.css';

const QaSection = () => {

  let faqSplit1QuestionsAndAnswers = [
    {
        question: 'What can we offer ?',
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
        question: 'Who are we?',
        answer: 'We are innovation enablers, accelerators for new ideas/start-ups and enhance incubation who are focussed to solve real world problems through a holistic cross disciplinary approach.',
    },
    {
        question: 'Why c-hub?',
        answer: 'As a part of the greater chennai corporation we have access to the real time data. If the project aligns with the corporation, it can even absorb it to make it a chennai corporation entity. Our council of advisory bodies consists of world leaders in every field. We support and collaborate and aid any individual determined to solve a societal problem to ensure a win-win situation. We provide a networking platform to pitch. Also, C-Hub can build & test proof of concept and connect you with potential incubators and investors.',
    },
    {
        question: 'Why do I need to be part of this?',
        answer: 'Being part of the c-hub enables you to deal with problems at the grassroot level. Besides, it helps you to make a difference in society with infrastructure, dataset, office access.',
        
    },
    {
        question: 'How can I be a part of this?',
        answer: 'As a student you can be an intern at the C-Hub. If you’re a PhD scholar working in solving the corporation problem to impact people, you can collaborate with GCC to get access and data for accurate analysis. As a startup founder, C-hub provides a platform to pilot your project, build PoC and connect you with potential incubators and investors. As a subject matter expert, you can work hand in hand with dignitaries as a pillar of support to the corporation to solve and achieve sustainable development goals.',
    },
    {
        question: 'Can I intern part-time /remotely?',
        answer: 'No, this is not in place yet.',
    },
    {
        question: 'I’m a part of an educational institution. How can we contribute?',
        answer: 'We are open to collaboration with young minds. Please mail us at chub.gcc@gmail.com to know more.',
    },
    {
        question: 'How will the educational institution benefit?',
        answer: 'We will sign a MoU with the institutions that may lead to future collaborations and research works.',
    }
];

let faqSplit2QuestionsAndAnswers = [
    {
        question: 'Will I get a certificate post completion of my internship or workshop or project?',
        answer: 'Yes, you definitely would get a certificate.',
    },
    {
        question: 'How can I get funding from the GCC?',
        answer: 'Funding is decided on a case by case basis at the discretion of the GCC and advisory council. If the student or professional is working on problems that the corporation is focussing on, the GCC will consider funding and collaboration. Please mail chub.gcc@gmail.com for further details.',
    },
    {
        question: 'Who is a part of the advisory council?',
        answer: 'Advisory council consists of professionals and experts from various fields. For eg the technical advisory council consists of market leaders of subject matter expert from the technology space who would carry decades of experience.',
    },
    {
        question: 'Can I be a part of the advisory council?',
        answer: 'Yes. We request you to send your resume and an interest statement (500 words max) on why you should be selected to chub.gcc@gmail.com. It will be carefully reviewed by our expert committee before intimating you about the decision. The council is on pro bono basis.',
        readMore: 'google.com'

    },
    {
        question: 'I’m a working professional. Can I still be a part of the advisory council?',
        answer: 'Yes you can. In fact, we require 3hours per month of your time and expertise for our projects on a pro bono basis.',
    },
    {
        question: 'What is the minimum qualification to be a part of the C-hub?',
        answer: 'There is absolutely no minimum qualification. Are you someone who looks to challenge the status quo? If yes, we need you.',
    },
    {
        question: 'I haven’t been a part of innovation but want to gain exposure.',
        answer: 'We are a group of like minded individuals from different verticals looking to redefine the world. You can be a part of the workshops, events, hackathons and career fairs. For further information mail us chub.gcc@gmail.com.',
    },
    {
        question: 'Where are you located?',
        answer: 'We are located on the second floor of Ripon Building, Greater Chennai Corporation.',
    }
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

// const translate = (contentPath, values) => {
//   const language = window.sessionStorage.getItem('language');
//   const contentToBePicked = language === 'tamil' ? tamilContent : englishContent;
//   const content = _.get(contentToBePicked, contentPath, null);
//   if (content instanceof Array) {
//     return content.map(item => (values && item ? _.template(item)(values) : item));
//   }
//   return values && content ? _.template(content)(values) : content;
// };

export default QaSection;
import _ from 'lodash';

const englishContent = {
  home: {
    header: 'Welcome'
  },
  subNav: {
    home: 'Home',
    aboutUs: 'About Us',
    council: 'Council',
    workWithUs: 'Work with Us',
    events: 'Events',
    projects: 'Projects',
    faq: 'FAQ',
    contactUs: 'Contact Us'
  }
};

const tamilContent = {
  home: {
    header: 'வரவேற்பு'
  },
  subNav: {
    home: 'முகப்பு',
    aboutUs: 'சென்னை மாநகராட்சியைப் பற்றி',
    council: 'மன்றம்',
    workWithUs: 'எங்களுடன் வேலை செய்யுங்கள்',
    events: 'நிகழ்வுகள்',
    projects: 'திட்டங்கள்',
    faq: 'FAQ',
    contactUs: 'எங்களை தொடர்பு கொள்ள'
  }
};


const translate = (contentPath, values) => {
  const language = window.sessionStorage.getItem("language");
  const contentToBePicked = language === 'tamil' ? tamilContent : englishContent;
  const content = _.get(contentToBePicked, contentPath, null);
  if (content instanceof Array) {
    return content.map(item => (values && item ? _.template(item)(values) : item));
  }
  return values && content ? _.template(content)(values) : content;
};

export default {
  t: translate,
};

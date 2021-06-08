import _ from 'lodash';

const englishContent = {
  home: {
    firstRowBtn: 'Work With Us',
    secondBannerHeading: 'Current Events',
    Events: [{
      'event_name': '',
      'from_date': '',
      'to_date': '',
      'event_location': ''
    }],
    thirdBannerHeading: 'Changemaker’s Program',
    thirdBannerHeadingDescription: 'Change begins at home and we want to be able to bring about grassroot level changes through our program. The Changemaker’s program exclusively focuses on creating academic engagements for C-Hub in the city.',
    thirdBannerSubHeading: 'Who can join the Changemaker’s Program ?',
    thirdBannerBeAChangeButton: 'Be a Change Maker'
  },
  aboutUs: {
    firstRowHeader: 'About Us',
    firstRowSubHeade: [
      'Innovate.',
      'Sustain.',
      'Enable.'
    ],
    firstRowParagraph: [
      'C-Hub (Chennai-Hub) is the first of its kind innovation Hub set up by the Greater Chennai Corporation. This is an attempt to foster and promote innovation across different verticals. It harps on the need for Academia, Industries and GCC to work together to encourage good and innovative ideas.',
      'A multidisciplinary team will be put together in order to approach problems through a holistic lens. The innovation hub will host stakeholders from different verticals to be part of this platform. It is an inclusive platform which will attempt to solve social, environmental and urban problems in the city together with its citizens.',
      'A new paradigm is required that essentially brings urban stakeholders to collectively provide the know-how to urban challenges ensuring their expertise and perspective is reflected in urban solutioning for the future. A coming together of these critical stakeholders, termed as the Quadruple Helix, can aid in active flow of ideas and information to create both value and reduce risks, in essence, creating an ‘innovation value-network’ that spills benefits across the urban ecosystem gearing our cities for the future.'
    ],
    secondRowHeader: 'Core Functions',
    secondRowData: [
      'Enable and sustain the discovery and deployment of innovation to tackle urban challenges',
      'Increasing economic growth',
      'Enhance quality of life and ensure sustainability in processes'
    ],
    thirdRowHeader: 'Team',
    thirdRowImage1:'style = width: 160px; height: 160px;',
    thirdRowImage2:'',
    thirdRowImage3:'',
    thirdRowImage4:'',
    fourthRowHeader: 'Mission',
    fourthRowData: [
      'A cross-boundary collaborative regime instituted to decide on innovation pathways.',
      'Building partnerships between the quadruple helix (QH) of stakeholders into an ecosystem for know-how solutioning.'
    ],
    fifthRowHeader: 'Vision',
    fifthRowData: [
      'To become the largest think tank in the Country in the next three years.',
      'To successfully establish Proof of concept by piloting in Chennai.',
      'To create a working template that can be adapted by other cities in Tamil Nadu.',
      'To be a platform for intersectionality of academics, entrepreneurship and the Chennai Corporation.'
    ],
    sixthRowHeader: 'Values'
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
    firstRowBtn: 'எங்களுடன் வேலை செய்யுங்கள்',
    secondBannerHeading: 'தற்போதைய நிகழ்வுகள்',
    Events: [{
      'event_name': '',
      'from_date': '',
      'to_date': '',
      'event_location': ''
    }],
    thirdBannerHeading: 'ேஞ்ச்மேக்கரின் திட்டம்',
    thirdBannerHeadingDescription: 'ாற்றம் வீட்டிலேயே தொடங்குகிறது, மேலும் எங்கள் திட்டத்தின் மூலம் அடிமட்ட அளவிலான மாற்றங்களைக் கொண்டு வர விரும்புகிறோம். சேஞ்ச்மேக்கரின் திட்டம் நகரத்தில் சி-ஹப்பிற்கான கல்வி ஈடுபாடுகளை உருவாக்குவதில் மட்டுமே கவனம் செலுத்துகிறது.',
    thirdBannerSubHeading: 'சேஞ்ச்மேக்கரின் திட்டத்தில் யார் சேரலாம்?',
    thirdBannerBeAChangeButton: 'ஒரு மாற்றத்தை உருவாக்குபவராக இருங்கள்'
  },
  aboutUs: {
    firstRowHeader: 'எங்களை பற்றி',
    thirdRowImage1:'style = width: 160px; height: 160px; display: none;',
    thirdRowImage2:'',
    thirdRowImage3:'',
    thirdRowImage4:'',
    firstRowSubHeade: [
      'புதுமை.',
      'நிலைத்திருங்கள்.',
      'இயக்கு.'
    ],
    firstRowParagraph: [
      'கிரேட்டர் சென்னை கார்ப்பரேஷனால் அமைக்கப்பட்ட சி-ஹப் (சென்னை-ஹப்) அதன் முதல் கண்டுபிடிப்பு மையமாகும். வெவ்வேறு செங்குத்துகளில் புதுமைகளை வளர்ப்பதற்கும் ஊக்குவிப்பதற்கும் இது ஒரு முயற்சி. நல்ல மற்றும் புதுமையான யோசனைகளை ஊக்குவிக்க அகாடெமியா, இண்டஸ்ட்ரீஸ் மற்றும் ஜி.சி.சி இணைந்து செயல்பட வேண்டியதன் அவசியத்தை இது விளக்குகிறது.',
      'ஒரு முழுமையான லென்ஸ் மூலம் சிக்கல்களை அணுகுவதற்காக ஒரு பல்வகைக் குழு ஒன்று சேர்க்கப்படும். கண்டுபிடிப்பு மையம் இந்த தளத்தின் ஒரு பகுதியாக வெவ்வேறு செங்குத்துகளிலிருந்து பங்குதாரர்களை வழங்கும். இது ஒரு உள்ளடக்கிய தளமாகும், இது நகரத்தில் உள்ள சமூக, சுற்றுச்சூழல் மற்றும் நகர்ப்புற பிரச்சினைகளை அதன் குடிமக்களுடன் சேர்ந்து தீர்க்க முயற்சிக்கும்.',
      'ஒரு புதிய முன்னுதாரணம் தேவைப்படுகிறது, இது நகர்ப்புற பங்குதாரர்களுக்கு அவர்களின் நிபுணத்துவத்தையும் முன்னோக்கையும் உறுதிப்படுத்தும் நகர்ப்புற சவால்களை எவ்வாறு கூட்டாக வழங்குவதற்கான எதிர்காலத்தை நகர்ப்புற தீர்வுகளில் பிரதிபலிக்கிறது. நான்கு முக்கியமான ஹெலிக்ஸ் என அழைக்கப்படும் இந்த முக்கியமான பங்குதாரர்களின் ஒன்றிணைவு, மதிப்பு மற்றும் அபாயங்களை இரண்டையும் உருவாக்குவதற்கான யோசனைகள் மற்றும் தகவல்களின் செயலில் ஓட்டத்திற்கு உதவக்கூடும், சாராம்சத்தில், நகர்ப்புற சுற்றுச்சூழல் அமைப்பு முழுவதும் நன்மைகளை பரப்பும் ஒரு புதுமை மதிப்பு-வலையமைப்பை உருவாக்குகிறது. எதிர்காலத்திற்கான எங்கள் நகரங்கள்.'
    ],
    secondRowHeader: 'முக்கிய செயல்பாடுகள்',
    secondRowData: [
      'நகர்ப்புற சவால்களை சமாளிக்க புதுமைகளின் கண்டுபிடிப்பு மற்றும் வரிசைப்படுத்தலை இயக்கவும் பராமரிக்கவும்',
      'பொருளாதார வளர்ச்சியை அதிகரிக்கும்',
      'வாழ்க்கைத் தரத்தை மேம்படுத்துதல் மற்றும் செயல்முறைகளில் நீடித்த தன்மையை உறுதி செய்தல்'
    ],
    thirdRowHeader: 'அணி',
    fourthRowHeader: 'ிஷன்',
    fourthRowData: [
      'கண்டுபிடிப்பு பாதைகளை தீர்மானிக்க ஒரு குறுக்கு எல்லை கூட்டு ஆட்சி நிறுவப்பட்டது.',
      'அறிவை எவ்வாறு தீர்ப்பதற்கான ஒரு சுற்றுச்சூழல் அமைப்பில் பங்குதாரர்களின் நான்கு மடங்கு ஹெலிக்ஸ் (கியூஎச்) இடையே கூட்டாண்மைகளை உருவாக்குதல்.'
    ],
    fifthRowHeader: 'ார்வை',
    fifthRowData: [
      'அடுத்த மூன்று ஆண்டுகளில் நாட்டின் மிகப்பெரிய சிந்தனைக் குழுவாக மாறுவது.',
      'சென்னையில் பைலட் செய்வதன் மூலம் கருத்து ஆதாரத்தை வெற்றிகரமாக நிறுவுதல்.',
      'தமிழ்நாட்டின் பிற நகரங்களால் மாற்றியமைக்கக்கூடிய ஒரு வேலை வார்ப்புருவை உருவாக்க. சென்னையில் பைலட்டிங்.',
      'கல்வியாளர்கள், தொழில்முனைவோர் மற்றும் சென்னை கார்ப்பரேஷன் ஆகியவற்றின் குறுக்குவெட்டுக்கான தளமாக இருக்க வேண்டும்.'
    ],
    sixthRowHeader: 'மதிப்புகள்'
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
  const language = window.sessionStorage.getItem('language');
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

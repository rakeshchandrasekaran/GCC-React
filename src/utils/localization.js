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
  },
  council: {
    firstRowHeader: 'Council',
    firstRowSubHeader: 'Experience breeds Perspectives',
    firstRowDescription: 'C-hub wants to create teams with experienced individuals who have a specialization in the chosen verticals. The Advisory councils will constitute a team of experts from different verticals. C-Hub will support, empower, foster and advance ideas to next level.',
    secondRowHeader: 'The Chennai Innovation Hub will work on various verticals like',
    thirdRowHeader: 'Join Advisory Council',
    thirdRowDescription: 'Do you consider yourself an industry leader? Would you like to be part of the change? Have you always wanted to be at the crux of the changemaking process? Join the Advisory council.',
    thirdRowSubHeader: 'Council’s Responsibilities',
    thirdRowData: [
      'Formulate the structure and the annual plan for the respective verticals.',
      'Make connections and network across verticals to keep up with trends.',
      'Mentoring individuals / Start-ups throughout the evolution of the idea.',
      'Co-create solutions : Provide/ Facilitate resources to aid in problem solving.',
      'Identifying ideas and Capacitu building.',
      'Recommend specific solutions based on the subject matter.'
    ],
    fourthRowHeader: 'How to Apply ?',
    fourthRowSubHeader1: 'Submit your Application',
    fourthRowDescription1: 'Interested Individuals can write to the C-hub team at “ chub.gcc@gmail.com “with the subject line “ Interested to apply for the ( Name of the vertical) advisory council ”.',
    fourthRowSubHeader2: 'Get Shortlisted',
    fourthRowDescription2: 'Shortlisted candidates will be invited to share their ideas with the C-hub Leadership team',
    fourthRowSubHeader3: 'Join the Council',
    fourthRowDescription3: 'Selected candidates will be introduced to the rest of their peers in order to formulate the structure and approach of their verticals',
  },
  footer:{
    firstColumnHeader: 'Chennai Innovation Hub',
    firstColumnAddress: [
      'No 53, Raja Muthiah Rd,',
      ' Kannappar Thidal, Periyamet,',
      ' Chennai, Tamil Nadu 600003'
    ],
    secondColumnHeader: 'Helpful Links',
    secondColumnFirstRow:'Sitemap',
    secondColumnSecondRow:'Disclaimer',
    secondColumnThirdRow: 'Privacy Policy',
    secondColumnFourthRow: 'Contact Us'
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
  },
  council: {
    firstRowHeader: 'சபை',
    firstRowSubHeader: 'அனுபவம் இனப்பெருக்கம்',
    firstRowDescription: 'தேர்ந்தெடுக்கப்பட்ட செங்குத்துகளில் நிபுணத்துவம் பெற்ற அனுபவம் வாய்ந்த நபர்களுடன் குழுக்களை உருவாக்க சி-ஹப் விரும்புகிறது. ஆலோசனைக் குழுக்கள் வெவ்வேறு செங்குத்துகளைச் சேர்ந்த நிபுணர்களின் குழுவை அமைக்கும். சி-ஹப் அடுத்த நிலைக்கு யோசனைகளை ஆதரிக்கும், அதிகாரம் அளிக்கும், வளர்க்கும் மற்றும் முன்னேறும்.',
    secondRowHeader: 'சென்னை கண்டுபிடிப்பு மையம் போன்ற பல்வேறு செங்குத்துகளில் வேலை செய்யும்',
    thirdRowHeader: 'ஆலோசனைக் குழுவில் சேரவும்',
    thirdRowDescription: 'உங்களை ஒரு தொழில் தலைவராக கருதுகிறீர்களா? மாற்றத்தின் ஒரு பகுதியாக நீங்கள் இருக்க விரும்புகிறீர்களா? மாற்றத்தை உருவாக்கும் செயல்முறையின் உச்சத்தில் நீங்கள் எப்போதும் இருக்க விரும்புகிறீர்களா? ஆலோசனைக் குழுவில் சேரவும்.',
    thirdRowSubHeader: '',
    thirdRowData: [
      'அந்தந்த செங்குத்துகளுக்கான கட்டமைப்பு மற்றும் ஆண்டு திட்டத்தை உருவாக்குங்கள்.',
      'போக்குகளைத் தொடர செங்குத்துகளில் இணைப்புகள் மற்றும் நெட்வொர்க்கை உருவாக்கவும்.',
      'யோசனையின் பரிணாமம் முழுவதும் தனிநபர்கள் / ஸ்டார்ட்-அப்களை வழிநடத்துதல்.',
      'தீர்வுகளை இணை உருவாக்குதல்: சிக்கலைத் தீர்ப்பதற்கு உதவ வளங்களை வழங்குதல் / எளிதாக்குதல்.',
      'யோசனைகளை அடையாளம் காண்பது மற்றும் கேபசிட்டு கட்டிடம்.',
      'பொருள் அடிப்படையில் குறிப்பிட்ட தீர்வுகளை பரிந்துரைக்கவும்.'
    ],
    fourthRowHeader: 'எப்படி விண்ணப்பிப்பது ?',
    fourthRowSubHeader1: 'உங்கள் விண்ணப்பத்தை சமர்ப்பிக்கவும்',
    fourthRowDescription1: 'ஆர்வமுள்ள நபர்கள் "chub.gcc@gmail.com" இல் சி-ஹப் குழுவுக்கு "(செங்குத்து பெயர்) ஆலோசனைக் குழுவிற்கு விண்ணப்பிக்க ஆர்வம்" என்ற தலைப்புடன் எழுதலாம்.',
    fourthRowSubHeader2: 'குறுகியப்பட்டியலைப் பெறுங்கள்',
    fourthRowDescription2: 'பட்டியலிடப்பட்ட வேட்பாளர்கள் தங்கள் கருத்துக்களை சி-ஹப் தலைமைக் குழுவுடன் பகிர்ந்து கொள்ள அழைக்கப்படுவார்கள்',
    fourthRowSubHeader3: 'சபையில் சேரவும்',
    fourthRowDescription3: 'தேர்ந்தெடுக்கப்பட்ட வேட்பாளர்கள் தங்கள் செங்குத்துகளின் கட்டமைப்பையும் அணுகுமுறையையும் வகுப்பதற்காக மீதமுள்ள சகாக்களுக்கு அறிமுகப்படுத்தப்படுவார்கள்',
  },
  footer:{
    firstColumnHeader: 'சென்னை கண்டுபிடிப்பு மையம்',
    firstColumnAddress: [
      'எண் 53, ராஜா முத்தியா சாலை,',
      'கண்ணப்பர் திடால், பெரியமேட்,',
      'சென்னை, தமிழ்நாடு 600003'
    ],
    secondColumnHeader: 'பயனுள்ள இணைப்புகள்',
    secondColumnFirstRow:'தள வரைபடம்',
    secondColumnSecondRow:'மறுப்பு',
    secondColumnThirdRow: 'தனியுரிமைக் கொள்கை',
    secondColumnFourthRow: 'எங்களை தொடர்பு கொள்ள'
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

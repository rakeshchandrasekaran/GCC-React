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
    thirdRowImage1: 'style = width: 160px; height: 160px;',
    thirdRowImage2: '',
    thirdRowImage3: '',
    thirdRowImage4: '',
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
  projects: {
    firstRowHeaders: 'Projects',
    firstRowDescription: 'Get to know about all the projects that have been developed in collaboration with Chennai Innovation Hub.',
    thirdRowHeader: 'Interested in Collaborating with C-Hub ?',
    thirdRowButton: 'Work With Us'
  },
  faq: {
    firstRowHeader: 'Frequently Asked Questions',
    faqSplit1QuestionsAndAnswers: [
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
    ],
    faqSplit2QuestionsAndAnswers: [
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
    ]
  },
  events: {
    firstRowHeader: 'Events',
    firstEventData: [
      { 
        name: 'Hackathon',
        header: 'Smart City Hackathon',
        description:'Come up with technology solutions to make our cities smarter, and participate in our 12-hour hackathon that will be held in Chennai, one of the first few smart cities in India. This hackathon is being organised by the Chennai Innovation Hub along with Greater Chennai Corporation. For further queries mail us at “chub.gcc@gmail.com” .'
      },
      {
        name:'Networking Event',
        header:'Students Networking Event',
        description:'Participate in the upcoming student networking event to connect with some of the brightest minds in the city.For further queries mail us at “chub.gcc@gmail.com” '
      }
    ],
    firstEventDate: [
      {
        teamSizeText: 'Team Size',
        teanSize: '2-4 Members',
        registrationFeeText :'Registration Fee',
        registrationFee:'Free',
        dateText: 'Date',
        date:'15th June 2021',
        timeText: 'Time',
        time:'10AM - 10PM',
        locationText: 'Location',
        location:'Information Center, Egmore, Chennai - 600002'
      },
      {
        teamSizeText: 'Team Size',
        teanSize: 'No Limit',
        registrationFeeText :'Registration Fee',
        registrationFee:'Free',
        dateText: 'Date',
        date:'25th June 2021',
        timeText: 'Time',
        time:'10AM - 1PM',
        locationText: 'Location',
        location:'College of Engineering, Guindy, Chennai - 600025'
      }
    ]
  },
  footer: {
    firstColumnHeader: 'Chennai Innovation Hub',
    firstColumnAddress: [
      'No 53, Raja Muthiah Rd,',
      ' Kannappar Thidal, Periyamet,',
      ' Chennai, Tamil Nadu 600003'
    ],
    secondColumnHeader: 'Helpful Links',
    secondColumnFirstRow: 'Sitemap',
    secondColumnSecondRow: 'Disclaimer',
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
    thirdRowImage1: 'style = width: 160px; height: 160px; display: none;',
    thirdRowImage2: '',
    thirdRowImage3: '',
    thirdRowImage4: '',
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
  projects: {
    firstRowHeaders: 'திட்டங்கள்',
    firstRowDescription: 'சென்னை கண்டுபிடிப்பு மையத்துடன் இணைந்து உருவாக்கப்பட்டுள்ள அனைத்து திட்டங்களையும் பற்றி அறிந்து கொள்ளுங்கள்.',
    thirdRowHeader: 'சி-ஹப் உடன் ஒத்துழைக்க ஆர்வமா ?',
    thirdRowButton: 'எங்களுடன் வேலை செய்யுங்கள்'
  },
  faq: {
    firstRowHeader: 'Frequently Asked Questions',
    faqSplit1QuestionsAndAnswers: [
      {
        question: 'நாம் என்ன வழங்க முடியும்?',
        answer: 'சென்னை புதுமை மையம் போன்ற பல்வேறு வாய்ப்புகளை வழங்குகிறது',
        answerPoints: [
          'உங்கள் யோசனையைத் தேர்வுசெய்து வழிகாட்டும் தளம்.',
          'நிகழ்நேர தரவு பகிர்வை இயக்கு.',
          'திட்டத்தை செயல்படுத்தவும் செயல்படுத்தவும் இருக்கும் சமூகத்தை வழங்கவும்.',
          'சுற்றுச்சூழல் செயலாக்கத்திற்கான கூட்டாண்மை மற்றும் மேம்பாடு.',
          'திறன் மேம்பாடு மற்றும் அறிவு சேவைகள்.',
          'மேலாண்மை மற்றும் சிந்தனைத் தலைமையை மாற்றவும்.',
          'வெவ்வேறு செங்குத்துகளுக்கான புதுமை நிபுணத்துவம் மற்றும் பதிலளிக்கக்கூடிய ஒழுங்குமுறை பற்றிய ஆலோசனை.',
          'பிஓசி உருவாக்க நகரம் ஒரு வாழ்க்கை ஆய்வகமாக செயல்படும்.'
        ],
        readMore: 'google.com'
      },
      {
        question: 'நாம் யார்?',
        answer: 'நாங்கள் புதுமை செய்பவர்கள், புதிய யோசனைகள் / தொடக்கங்களுக்கான முடுக்கிகள் மற்றும் ஒரு முழுமையான குறுக்கு ஒழுங்கு அணுகுமுறை மூலம் உண்மையான உலகப் பிரச்சினைகளைத் தீர்க்க கவனம் செலுத்துகின்ற அடைகாக்கும் தன்மையை மேம்படுத்துகிறோம்.',
      },
      {
        question: 'ஏன் சி-ஹப்?',
        answer: 'பெரிய சென்னை நிறுவனத்தின் ஒரு பகுதியாக, நிகழ்நேர தரவை அணுகுவோம். இந்த திட்டம் கார்ப்பரேஷனுடன் இணைந்தால், அதை ஒரு சென்னை கார்ப்பரேஷன் நிறுவனமாக மாற்றுவதற்கு கூட அதை உள்வாங்க முடியும். எங்கள் ஆலோசனைக் குழுக்களின் சபை ஒவ்வொரு துறையிலும் உலகத் தலைவர்களைக் கொண்டுள்ளது. ஒரு வெற்றி-வெற்றி சூழ்நிலையை உறுதி செய்வதற்காக ஒரு சமூக சிக்கலை தீர்க்க தீர்மானிக்கப்பட்ட எந்தவொரு நபருக்கும் நாங்கள் ஆதரவளித்து ஒத்துழைக்கிறோம், உதவுகிறோம். நாங்கள் ஒரு நெட்வொர்க்கிங் தளத்தை வழங்குகிறோம். மேலும், சி-ஹப் கருத்துருவின் சான்றுகளை உருவாக்கலாம் மற்றும் சோதிக்கலாம் மற்றும் சாத்தியமான காப்பகங்கள் மற்றும் முதலீட்டாளர்களுடன் உங்களை இணைக்க முடியும்.',
      },
      {
        question: 'நான் ஏன் இதன் ஒரு பகுதியாக இருக்க வேண்டும்?',
        answer: 'சி-ஹப்பின் ஒரு பகுதியாக இருப்பது அடிமட்ட மட்டத்தில் சிக்கல்களைச் சமாளிக்க உங்களுக்கு உதவுகிறது. தவிர, உள்கட்டமைப்பு, தரவுத்தொகுப்பு, அலுவலக அணுகல் ஆகியவற்றுடன் சமூகத்தில் ஒரு மாற்றத்தை ஏற்படுத்த இது உங்களுக்கு உதவுகிறது.',
      },
      {
        question: 'இதில் நான் எவ்வாறு ஒரு பகுதியாக இருக்க முடியும்?',
        answer: 'ஒரு மாணவராக நீங்கள் சி-ஹப்பில் இன்டர்ன் ஆகலாம். நீங்கள் மக்களை பாதிக்கும் வகையில் கார்ப்பரேஷன் சிக்கலைத் தீர்ப்பதில் பணிபுரியும் பி.எச்.டி அறிஞராக இருந்தால், துல்லியமான பகுப்பாய்விற்கான அணுகல் மற்றும் தரவைப் பெற ஜி.சி.சி உடன் ஒத்துழைக்கலாம். ஒரு தொடக்க நிறுவனராக, சி-ஹப் உங்கள் திட்டத்தை இயக்குவதற்கும், பி.ஓ.சி.யை உருவாக்குவதற்கும், சாத்தியமான காப்பகங்கள் மற்றும் முதலீட்டாளர்களுடன் உங்களை இணைப்பதற்கும் ஒரு தளத்தை வழங்குகிறது. ஒரு பொருள் வல்லுநராக, நிலையான அபிவிருத்தி இலக்குகளை தீர்க்கவும் அடையவும் நிறுவனத்திற்கு ஆதரவின் தூணாக நீங்கள் பிரமுகர்களுடன் கைகோர்த்து செயல்படலாம்.',
      },
      {
        question: 'நான் பகுதிநேர / தொலைதூர பயிற்சி பெறலாமா?',
        answer: 'இல்லை, இது இன்னும் இடத்தில் இல்லை.',
      },
      {
        question: 'நான் ஒரு கல்வி நிறுவனத்தின் ஒரு பகுதி. நாம் எவ்வாறு பங்களிக்க முடியும்?',
        answer: 'நாங்கள் இளம் மனதுடன் ஒத்துழைக்க திறந்திருக்கிறோம். மேலும் அறிய chub.gcc@gmail.com இல் எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்.',
      },
      {
        question: 'கல்வி நிறுவனம் எவ்வாறு பயனடைகிறது?',
        answer: 'எதிர்கால ஒத்துழைப்பு மற்றும் ஆராய்ச்சி பணிகளுக்கு வழிவகுக்கும் நிறுவனங்களுடன் புரிந்துணர்வு ஒப்பந்தத்தில் கையெழுத்திடுவோம்.',
      }
    ],
    faqSplit2QuestionsAndAnswers: [
      {
        question: 'எனது இன்டர்ன்ஷிப் அல்லது பட்டறை அல்லது திட்டத்தின் நிறைவு சான்றிதழ் பதவி கிடைக்குமா?',
        answer: 'ஆம், நீங்கள் நிச்சயமாக ஒரு சான்றிதழைப் பெறுவீர்கள்.',
      },
      {
        question: 'ஜி.சி.சி யிலிருந்து நான் எவ்வாறு நிதி பெற முடியும்?',
        answer: 'ஜி.சி.சி மற்றும் ஆலோசனைக் குழுவின் விருப்பப்படி வழக்கு அடிப்படையில் நிதி தீர்மானிக்கப்படுகிறது. நிறுவனம் கவனம் செலுத்தும் சிக்கல்களில் மாணவர் அல்லது தொழில்முறை நிபுணர் பணியாற்றினால், ஜி.சி.சி நிதி மற்றும் ஒத்துழைப்பைக் கருத்தில் கொள்ளும். மேலும் விவரங்களுக்கு chub.gcc@gmail.com க்கு மின்னஞ்சல் செய்யவும்.',
      },
      {
        question: 'ஆலோசனைக் குழுவின் ஒரு பகுதி யார்?',
        answer: 'ஆலோசனைக் குழுவில் பல்வேறு துறைகளைச் சேர்ந்த வல்லுநர்கள் மற்றும் நிபுணர்கள் உள்ளனர். எ.கா. தொழில்நுட்ப ஆலோசனைக் குழுவில் பல தசாப்த கால அனுபவங்களைக் கொண்டிருக்கும் தொழில்நுட்ப இடத்திலிருந்து பொருள் வல்லுநரின் சந்தை தலைவர்கள் உள்ளனர்.',
      },
      {
        question: 'நான் ஆலோசனைக் குழுவின் ஒரு பகுதியாக இருக்க முடியுமா?',
        answer: 'ஆம். நீங்கள் ஏன் chub.gcc@gmail.com க்கு தேர்வு செய்யப்பட வேண்டும் என்பதற்கான உங்கள் விண்ணப்பத்தையும் வட்டி அறிக்கையையும் (அதிகபட்சம் 500 வார்த்தைகள்) அனுப்புமாறு கேட்டுக்கொள்கிறோம். முடிவைப் பற்றி உங்களுக்குத் தெரிவிக்கும் முன் எங்கள் நிபுணர் குழுவால் இது கவனமாக மதிப்பாய்வு செய்யப்படும். சபை சார்பு போனோ அடிப்படையில் உள்ளது.',
        readMore: 'google.com'

      },
      {
        question: 'நான் ஒரு தொழில்முறை நிபுணர். நான் இன்னும் ஆலோசனைக் குழுவின் ஒரு பகுதியாக இருக்க முடியுமா?',
        answer: 'ஆமாம் உன்னால் முடியும். உண்மையில், எங்கள் திட்டங்களுக்கு உங்கள் நேரத்திற்கு 3 மணிநேரம் மற்றும் நிபுணத்துவம் தேவை.',
      },
      {
        question: 'சி-ஹப்பின் ஒரு பகுதியாக இருக்க குறைந்தபட்ச தகுதி என்ன?',
        answer: 'குறைந்தபட்ச தகுதி இல்லை. நீங்கள் அந்தஸ்தை சவால் செய்ய விரும்பும் ஒருவரா? ஆம் என்றால், எங்களுக்கு நீங்கள் தேவை.',
      },
      {
        question: 'நான் புதுமையின் ஒரு பகுதியாக இல்லை, ஆனால் வெளிப்பாட்டைப் பெற விரும்புகிறேன்.',
        answer: 'நாங்கள் உலகத்தை மறுவரையறை செய்ய விரும்பும் வெவ்வேறு செங்குத்துகளில் இருந்து ஒத்த எண்ணம் கொண்ட தனிநபர்களின் குழு. நீங்கள் பட்டறைகள், நிகழ்வுகள், ஹேக்கத்தான்கள் மற்றும் தொழில் கண்காட்சிகளில் ஒரு பகுதியாக இருக்கலாம். மேலதிக தகவல்களுக்கு chub.gcc@gmail.com என்ற மின்னஞ்சல் முகவரிக்கு அனுப்பவும்.',
      },
      {
        question: 'நீ எங்கு வசிக்கிறாய்?',
        answer: 'கிரேட்டர் சென்னை கார்ப்பரேஷனின் ரிப்பன் கட்டிடத்தின் இரண்டாவது மாடியில் நாங்கள் இருக்கிறோம்.',
      }
    ]
  },
  events: {
    firstRowHeader: 'நிகழ்வுகள்',
    firstEventData: [
      { 
        name: 'ஹாகாதான்',
        header: 'ஸ்மார்ட் சிட்டி ஹாகாதான்',
        description:'எங்கள் நகரங்களை சிறந்ததாக்க தொழில்நுட்ப தீர்வுகளைக் கொண்டு வாருங்கள், இந்தியாவின் முதல் சில ஸ்மார்ட் நகரங்களில் ஒன்றான சென்னையில் நடைபெறவுள்ள எங்கள் 12 மணி நேர ஹேக்கத்தானில் பங்கேற்கவும். இந்த ஹேக்கத்தானை கிரேட்டர் சென்னை கார்ப்பரேஷனுடன் சேர்ந்து சென்னை புதுமை மையமும் ஏற்பாடு செய்து வருகிறது. மேலும் கேள்விகளுக்கு “chub.gcc@gmail.com” என்ற மின்னஞ்சலில் எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்.'
      },
      {
        name:'நெட்வொர்க்கிங் நிகழ்வு',
        header:'மாணவர்கள் நெட்வொர்க்கிங் நிகழ்வு',
        description:'நகரத்தின் பிரகாசமான மனதுடன் இணைக்க வரவிருக்கும் மாணவர் வலைப்பின்னல் நிகழ்வில் பங்கேற்கவும். மேலும் கேள்விகளுக்கு "chub.gcc@gmail.com" '
      }
    ],
    firstEventDate: [
      {
        teamSizeText: 'அணி அளவு',
        teanSize: '2-4 உறுப்பினர்கள்',
        registrationFeeText :'பதிவு கட்டணம்',
        registrationFee:'இலவசம்',
        dateText: 'தேதி',
        date:'15th ஜூன் 2021',
        timeText: 'நேரம்',
        time:'10AM - 10PM',
        locationText: 'இடம்',
        location:'தகவல் மையம், எக்மோர், சென்னை - 600002'
      },
      {
        teamSizeText: 'அணி அளவு',
        teanSize: 'எல்லை இல்லாத',
        registrationFeeText :'பதிவு கட்டணம்',
        registrationFee:'இலவசம்',
        dateText: 'தேதி',
        date:'25th ஜூன் 2021',
        timeText: 'நேரம்',
        time:'10AM - 1PM',
        locationText: 'இடம்',
        location:'பொறியியல் கல்லூரி, கிண்டி, சென்னை - 600025'
      }
    ]
  },
  footer: {
    firstColumnHeader: 'சென்னை கண்டுபிடிப்பு மையம்',
    firstColumnAddress: [
      'எண் 53, ராஜா முத்தியா சாலை,',
      'கண்ணப்பர் திடால், பெரியமேட்,',
      'சென்னை, தமிழ்நாடு 600003'
    ],
    secondColumnHeader: 'பயனுள்ள இணைப்புகள்',
    secondColumnFirstRow: 'தள வரைபடம்',
    secondColumnSecondRow: 'மறுப்பு',
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

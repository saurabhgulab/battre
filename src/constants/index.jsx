import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  battery1,
  usbCharger,
  remoteKey,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  icici,
  bajaj,
  cfc,
  ezfinanz,
  zest,
  kotak,
  vidharbhkonkan,
  loantap,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "One",
    url: "#one",
  },
  {
    id: "1",
    title: "EPIC",
    url: "#epic",
  },
  {
    id: "2",
    title: "LO:ev",
    url: "#loev",
  },
  {
    id: "3",
    title: "Storie",
    url: "#storie",
  },
  {
    id: "4",
    title: "Test Ride",
    url: "#testride",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Book Now",
    url: "#booknow",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  icici,
  bajaj,
  kotak,
  ezfinanz,
  zest,
  vidharbhkonkan,
  loantap,
  cfc,
];

export const brainwaveServices = [
  "Stylish Metal Panels",
  "Spacious and roomy",
  "103 kms per charge (IDC) Range",
  "Detachable AIS 156 Certified Battery Pack",
];
export const loevServices = [
  "Affordable Premium Scooter",
  "Detachable LFP/NMC/Graphene Battery",
  "Remote Key & Anti Theft Alarm",
];
export const oneServices = [
  "Affordable Premium Scooter",
  "Detachable LFP/NMC/Graphene Battery",
  "Reverse Gear",
  "Remote Key & Anti Theft Alarm",
  "USB Charger",
];

export const battreServicesIcons = [remoteKey, usbCharger, battery1];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "24x7 Road Side Assistance",
    text: "Toll Free 1800 266 6264",
  },
  {
    id: "1",
    title: "21+ States",
    text: "More than 400+ Outlets",
  },
  {
    id: "2",
    title: "Designed & Developed in India",
    text: "20+ Design Patents Received",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "ONE",
    description: "Urban Confidence Redefined.",
    price: "73900",
    features: [
      "2 years Warranty on Battery & Motor.",
      "1 year Warranty on Charger, Controller & Convertor.",
      "80 KM Riding Range on 2.5 hrs Charging Time.",
    ],
  },
  {
    id: "1",
    title: "EPIC",
    description: "Add EPIC to your EV",
    price: "94999",
    features: [
      "3 years or 30000 Kms Warranty on MCB, Battery, Motor & Controller.",
      "1 year Warranty on Charger & Convertor.",
      "150 KM Riding Range per Charge",
    ],
  },
  {
    id: "2",
    title: "Lo:EV",
    price: "59990",
    description: "Commuting Made Easy with Lo:EV",
    features: [
      "Mileage of 60-150 Kms",
      "Charging time 2.5 Hrs - 8 Hrs",
      "Ability to explore the app and its features without any cost",
      "2 years Warranty on Battery & Motor.",
      "1 year Warranty on Charger, Controller & Convertor.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Eco-Friendly",
    text: "Electric scooters produce zero emissions, reducing your carbon footprint and contributing to a cleaner environment.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Cost-Effective",
    text: "They are much cheaper to operate than gasoline-powered vehicles, with lower electricity costs, fewer maintenance requirements, and no fuel expenses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Low Maintenance",
    text: "Electric scooters have fewer moving parts compared to traditional scooters, leading to lower maintenance costs and longer lifespan.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Convenient and Lightweight",
    text: "Most electric scooters are compact, making them easy to park, maneuver, and store. Many are also foldable for easy transport",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Quiet Operation",
    text: "Unlike gas-powered vehicles, electric scooters operate silently, reducing noise pollution and providing a peaceful ride.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Government Incentives",
    text: "Many governments offer subsidies, tax benefits, and rebates for purchasing electric scooters, making them more affordable",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

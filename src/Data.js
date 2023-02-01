import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram, faTwitter, faFacebookF, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import amex from './assets/logo/amex.png';
import mastercard from './assets/logo/mastercard.png';
import paypal from './assets/logo/paypal.png';
import soundcloud from './assets/logo/soundcloud.png';
import spotify from './assets/logo/spotify.png';

const Data = [
  {
    id: 1,
    title: 'Our Story',
    description: 'Cyprum itidem insulam procul a continenti discretam et portuosam inter municipia crebra urbes duae faciunt claram Salamis et Paphus, altera Iovis delubris altera Veneris templo insignis. tanta autem tamque multiplici fertilitate abundat rerum omnium eadem Cyprus ut nullius externi indigens adminiculi indigenis viribus a fundamento ipso carinae ad supremos usque carbasos aedificet onerariam navem omnibusque armamentis instructam mari committat.',
    Image: 'https://images.unsplash.com/photo-1674909073929-876e3427c43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
  {
    id: 2,
    title: 'Our Mission',
    description: 'Constituendi autem sunt qui sint in amicitia fines et quasi termini diligendi. De quibus tres video sententias ferri, quarum nullam probo, unam, ut eodem modo erga amicum adfecti simus, quo erga nosmet ipsos, alteram, ut nostra in amicos benevolentia illorum erga nos benevolentiae pariter aequaliterque respondeat, tertiam, ut, quanti quisque se ipse facit, tanti fiat ab amicis.',
    Image: 'https://images.unsplash.com/photo-1674976693197-788eeaf08638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 3,
    title: 'Our Vision',
    description: 'Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    Image: 'https://images.unsplash.com/photo-1674951751577-808ed93c858b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
];

const Team = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CTO',
    Image: 'https://images.unsplash.com/photo-1674925271384-fc642a6ba682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    socialMedia: [
      {
        id: 1,
        name: 'facebook',
        link: 'https://www.facebook.com/',
        icon: <FontAwesomeIcon icon={faFacebookF} />,
      },
      {
        id: 2,
        name: 'twitter',
        link: 'https://twitter.com/',
        icon: <FontAwesomeIcon icon={faTwitter} />,
      },
      {
        id: 3,
        name: 'instagram',
        link: 'https://www.instagram.com/',
        icon: <FontAwesomeIcon icon={faInstagram} />,
      },
      {
        id: 4,
        name: 'linkedin',
        link: 'https://www.linkedin.com/',
        icon: <FontAwesomeIcon icon={faLinkedin} />,
      },
    ],
  },
  {
    id: 2,
    name: 'Drake Doe',
    position: 'Brand Strategist',
    Image: 'https://images.unsplash.com/photo-1674851993235-f730432c37f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    socialMedia: [
      {
        id: 1,
        name: 'facebook',
        link: 'https://www.facebook.com/',
        icon: <FontAwesomeIcon icon={faFacebookF} />,
      },
      {
        id: 2,
        name: 'twitter',
        link: 'https://twitter.com/',
        icon: <FontAwesomeIcon icon={faTwitter} />,
      },
      {
        id: 3,
        name: 'instagram',
        link: 'https://www.instagram.com/',
        icon: <FontAwesomeIcon icon={faInstagram} />,
      },
      {
        id: 4,
        name: 'linkedin',
        link: 'https://www.linkedin.com/',
        icon: <FontAwesomeIcon icon={faLinkedin} />,
      },
    ],
  },
  {
    id: 3,
    name: 'Standalone Doe',
    position: 'Marketing Manager',
    Image: 'https://images.unsplash.com/photo-1674497040573-730f95603761?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    socialMedia: [
      {
        id: 1,
        name: 'facebook',
        link: 'https://www.facebook.com/',
        icon: <FontAwesomeIcon icon={faFacebookF} />,
      },
      {
        id: 2,
        name: 'twitter',
        link: 'https://twitter.com/',
        icon: <FontAwesomeIcon icon={faTwitter} />,
      },
      {
        id: 3,
        name: 'instagram',
        link: 'https://www.instagram.com/',
        icon: <FontAwesomeIcon icon={faInstagram} />,
      },
      {
        id: 4,
        name: 'linkedin',
        link: 'https://www.linkedin.com/',
        icon: <FontAwesomeIcon icon={faLinkedin} />,
      },
    ],
  },
  {
    id: 4,
    name: 'Jane Doe',
    position: 'Finance Manager',
    Image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    socialMedia: [
      {
        id: 1,
        name: 'facebook',
        link: 'https://www.facebook.com/',
        icon: <FontAwesomeIcon icon={faFacebookF} />,
      },
      {
        id: 2,
        name: 'twitter',
        link: 'https://twitter.com/',
        icon: <FontAwesomeIcon icon={faTwitter} />,
      },
      {
        id: 3,
        name: 'instagram',
        link: 'https://www.instagram.com/',
        icon: <FontAwesomeIcon icon={faInstagram} />,
      },
      {
        id: 4,
        name: 'linkedin',
        link: 'https://www.linkedin.com/',
        icon: <FontAwesomeIcon icon={faLinkedin} />,
      },
    ],
  },
];

const ProjectsData = {
  Branding: [
    {
      id: 1,
      name: 'Branding',
      Image: 'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
    {
      id: 2,
      name: 'Branding',
      Image: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
    {
      id: 3,
      name: 'Branding',
      Image: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
    {
      id: 4,
      name: 'Branding',
      Image: 'https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
  ],
  Design: [
    {
      id: 1,
      name: 'Design',
      Image: 'https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
    {
      id: 2,
      name: 'Design',
      Image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
    {
      id: 3,
      name: 'Design',
      Image: 'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
    {
      id: 4,
      name: 'Design',
      Image: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
  ],
  Development: [
    {
      id: 1,
      name: 'Development',
      Image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
    {
      id: 2,
      name: 'Development',
      Image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
    {
      id: 3,
      name: 'Development',
      Image: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
    {
      id: 4,
      name: 'Development',
      Image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
  ],
  Marketing: [
    {
      id: 1,
      name: 'Marketing',
      Image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
    {
      id: 2,
      name: 'Marketing',
      Image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
    {
      id: 3,
      name: 'Marketing',
      Image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
    {
      id: 4,
      name: 'Marketing',
      Image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.',
    },
  ],
};

const BlogsData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur elit.',
    Image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius...',
    date: '12/12/2020',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, adipiscing.',
    Image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur...',
    date: '12/12/2020',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor, consectetur elit.',
    Image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore...',
    date: '12/12/2020',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet, consectetur elit.',
    Image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto...',
    date: '12/12/2020',
  },
];

const ServicesData = [
  {
    id: 1,
    title: 'Branding',
    Items: [
      {
        id: 1,
        name: 'Brand Strategy',
      },
      {
        id: 2,
        name: 'Naming',
      },
      {
        id: 3,
        name: 'Logo Design',
      },
      {
        id: 4,
        name: 'Visual Identity',
      },
      {
        id: 5,
        name: 'Collateral Design',
      },
    ],
  },
  {
    id: 2,
    title: 'Design',
    Items: [
      {
        id: 1,
        name: 'Web Design',
      },
      {
        id: 2,
        name: 'Mobile App Design',
      },
      {
        id: 3,
        name: 'Print Design',
      },
      {
        id: 4,
        name: 'UI/UX Design',
      },
    ],
  },
  {
    id: 3,
    title: 'Development',
    Items: [
      {
        id: 1,
        name: 'Web Development',
      },
      {
        id: 2,
        name: 'Web App Development',
      },
      {
        id: 3,
        name: 'E-commerce Development',
      },
      {
        id: 4,
        name: 'API Development',
      },
      {
        id: 5,
        name: 'Full Stack Development',
      },
    ],
  },
  {
    id: 4,
    title: 'Marketing',
    Items: [
      {
        id: 1,
        name: 'SEO',
      },
      {
        id: 2,
        name: 'Social Media Marketing',
      },
      {
        id: 3,
        name: 'Content Marketing',
      },
      {
        id: 4,
        name: 'Email Marketing',
      },
      {
        id: 5,
        name: 'Influencer Marketing',
      },
    ],
  },
];

const TestimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'CEO, ABC Company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur...',
    Image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 2,
    name: 'Emil Doe',
    designation: 'CEO, XYZ Company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur...',
    Image: 'https://images.unsplash.com/photo-1559192823-e1d8e87def54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 3,
    name: 'Elina Doe',
    designation: 'CEO, PQR Company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto...',
    Image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 4,
    name: 'Martinez Doe',
    designation: 'CEO, MNO Company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto...',
    Image: 'https://images.unsplash.com/photo-1560714759-60e6eb4e1db6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
  },
];

const Clients = [
  {
    id: 1,
    Logo: `${paypal}`,
    name: 'Amazon',
  },
  {
    id: 2,
    Logo: `${amex}`,
    name: 'American Express',
  },
  {
    id: 3,
    Logo: `${soundcloud}`,
    name: 'Apple',
  },
  {
    id: 4,
    Logo: `${spotify}`,
    name: 'City Bank',
  },
  {
    id: 5,
    Logo: `${mastercard}`,
    name: 'Master Card',
  },
];

export default Data;
export {
  Team, ProjectsData, BlogsData, ServicesData, TestimonialsData, Clients,
};

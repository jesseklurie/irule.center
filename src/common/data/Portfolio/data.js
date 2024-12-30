import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { socialGoogleplusOutline } from 'react-icons-kit/ionicons/socialGoogleplusOutline';

import Awardee1 from '../../assets/image/portfolio/awardee-1.png';
import Awardee2 from '../../assets/image/portfolio/awardee-2.png';
import Awardee3 from '../../assets/image/portfolio/awardee-3.png';
import Awardee4 from '../../assets/image/portfolio/awardee-4.png';
import AwardImage1 from '../../assets/image/portfolio/award-1.png';
import AwardImage2 from '../../assets/image/portfolio/award-2.png';
import AwardImage3 from '../../assets/image/portfolio/award-3.png';
import AwardImage4 from '../../assets/image/portfolio/award-4.png';

import PortfolioImage1 from '../../assets/image/portfolio/portfolio-1.jpg';
import PortfolioImage2 from '../../assets/image/portfolio/portfolio-2.jpg';

import Step1 from '../../assets/image/portfolio/step-1.png';
import Step2 from '../../assets/image/portfolio/step-2.png';
import Step3 from '../../assets/image/portfolio/step-3.png';

import SkillIcon1 from '../../assets/image/portfolio/skill-1.svg';
import SkillIcon2 from '../../assets/image/portfolio/skill-2.svg';
import SkillIcon3 from '../../assets/image/portfolio/skill-3.svg';
import SkillIcon4 from '../../assets/image/portfolio/skill-4.svg';

import Client1 from '../../assets/image/portfolio/client-1.png';
import Client2 from '../../assets/image/portfolio/client-2.png';
import Client3 from '../../assets/image/portfolio/client-3.png';
import Client4 from '../../assets/image/portfolio/client-4.png';
import Client5 from '../../assets/image/portfolio/client-5.png';
import Client6 from '../../assets/image/portfolio/client-6.png';

import Reviewer1 from '../../assets/image/portfolio/client-avatar-1.jpg';
import Reviewer2 from '../../assets/image/portfolio/client-avatar-2.jpg';
import Reviewer3 from '../../assets/image/portfolio/client-avatar-3.jpg';

export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: '#',
  },
  {
    icon: socialFacebook,
    url: '#',
  },
  {
    icon: socialDribbbleOutline,
    url: '#',
  },
  {
    icon: socialGithub,
    url: 'https://github.com/jesseklurie',
  },
  {
    icon: socialGoogleplusOutline,
    url: 'mailto:jesseklurie@gmail.com',
  },
];

export const MENU_ITEMS = [
  {
    label: 'ME',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'PORTFOLIO',
    path: '#portfolio_section',
    offset: '0',
  },
  {
    label: 'SERVICES',
    path: '#skills_section',
    offset: '0',
  },
  // {
  //   label: 'AWARDS',
  //   path: '#awards_section',
  //   offset: '0',
  // },
  // {
  //   label: 'WHY ME?',
  //   path: '#portfolio_section',
  //   offset: '0',
  // },
];

export const AWARDS = [
  {
    awardLogo: AwardImage1,
    awardName: 'Substrate Blockchain Developer',
    awardDetails: 'Blockchain Technology Certification',
    awardeeLogo: Awardee1,
    awardeeName: 'Awardee',
    date: 'The Jury 2023',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'Certified Ethical Hacker',
    awardDetails: 'Ethical Hacking Certification',
    awardeeLogo: Awardee2,
    awardeeName: 'Awardee',
    date: 'The Jury 2023',
  },
  {
    awardLogo: AwardImage3,
    awardName: 'Top Developer Award',
    awardDetails: 'Recognized for Excellence in Development',
    awardeeLogo: Awardee3,
    awardeeName: 'Awardee',
    date: 'The Jury 2023',
  },
  {
    awardLogo: AwardImage4,
    awardName: 'Innovative Project Award',
    awardDetails: 'Award for Innovative Projects',
    awardeeLogo: Awardee4,
    awardeeName: 'Awardee',
    date: 'The Jury 2023',
  },
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: 'UI/UX DESIGN',
    portfolioItem: [
      {
        title: 'Comprehensive UI/UX Design for Web and Mobile Applications',
        description:
          "Offering end-to-end UI/UX design services, from initial user research and wireframing to high-fidelity prototypes and final design implementation. Specializing in creating user-friendly interfaces that enhance engagement and drive conversions across web and mobile platforms.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'Portfolio',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'User Research',
          },
          {
            content: 'Wireframing',
          },
          {
            content: 'Prototyping',
          },
          {
            content: 'Visual Design',
          },
          {
            content: 'Figma',
          },
        ],
      },
    ],
  },
  {
    title: 'WEB DEVELOPMENT',
    portfolioItem: [
      {
        title: 'Full-Stack Web Development Services',
        description:
          "Providing comprehensive web development services from front-end to back-end. Specializing in building responsive, scalable, and high-performance websites and web applications. Expertise in creating custom solutions tailored to specific business needs.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'Portfolio',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'Front-End Development',
          },
          {
            content: 'Back-End Development',
          },
          {
            content: 'API Integration',
          },
          {
            content: 'Database Management',
          },
          {
            content: 'React JS',
          },
          {
            content: 'NodeJS',
          },
          {
            content: 'MongoDB',
          },
          {
            content: 'ExpressJS',
          },
        ],
      },
      {
        title: 'Responsive Web Design',
        description:
          "Expert in creating responsive web designs that ensure optimal user experience across all devices and screen sizes. Utilizing modern frameworks and technologies to deliver seamless and engaging user interfaces.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'Portfolio',
        featuredLink: '#',
        view: '3.8K',
        love: '1.2K',
        feedback: '950',
        buildWith: [
          {
            content: 'HTML5',
          },
          {
            content: 'CSS3',
          },
          {
            content: 'Bootstrap',
          },
          {
            content: 'Tailwind CSS',
          },
        ],
      },
      {
        title: 'Web Application Development',
        description:
          "Developing robust and scalable web applications with modern technologies. Focus on creating user-centric applications that enhance functionality and performance.",
        // image: PortfolioImage3,
        link: '#',
        featuredIn: 'Portfolio',
        featuredLink: '#',
        view: '4.2K',
        love: '1.3K',
        feedback: '1.0K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'GraphQL',
          },
          {
            content: 'NodeJS',
          },
          {
            content: 'PostgreSQL',
          },
        ],
      },
    ],
  },  
  {
    title: 'MOBILE APP DEVELOPMENT',
    portfolioItem: [
      {
        title: 'Custom Mobile App Solutions',
        description:
          "Providing end-to-end mobile app development services, from conceptualization to deployment. Specializing in creating high-performance, user-centric mobile applications for both iOS and Android platforms, using the latest technologies and frameworks.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'Portfolio',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Flutter',
          },
          {
            content: 'Swift',
          },
          {
            content: 'Kotlin',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'RESTful APIs',
          },
        ],
      },
    ],
  },  
  {
    title: 'BLOCKCHAIN DEVELOPMENT',
    portfolioItem: [
      {
        title: 'Custom Blockchain Solutions for Business',
        description:
          "Offering end-to-end blockchain development services to create secure, scalable, and decentralized solutions. Specializing in smart contract development, blockchain integration, and creating custom blockchain architectures tailored to business needs.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'Portfolio',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'Smart Contracts',
          },
          {
            content: 'Decentralized Applications (DApps)',
          },
          {
            content: 'Blockchain Integration',
          },
          {
            content: 'Custom Blockchain Development',
          },
          {
            content: 'Substrate',
          },
          {
            content: 'Polkadot',
          },
          {
            content: 'Ethereum',
          },
          {
            content: 'Solidity',
          },
        ],
      },
      {
        title: 'Blockchain Integration for Existing Systems',
        description:
          "Integrating blockchain technology into existing systems to enhance security, transparency, and efficiency. Focused on seamless integration and providing tailored solutions to meet specific business requirements.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'Portfolio',
        featuredLink: '#',
        view: '3.8K',
        love: '1.2K',
        feedback: '950',
        buildWith: [
          {
            content: 'APIs for Blockchain',
          },
          {
            content: 'Chainlink',
          },
          {
            content: 'Hyperledger',
          },
          {
            content: 'Interoperability Solutions',
          },
        ],
      },
      {
        title: 'Smart Contract Development',
        description:
          "Developing and deploying smart contracts to automate and secure business processes. Expertise in creating efficient and reliable smart contracts tailored to various use cases.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'Portfolio',
        featuredLink: '#',
        view: '4.2K',
        love: '1.3K',
        feedback: '1.0K',
        buildWith: [
          {
            content: 'Solidity',
          },
          {
            content: 'Ethereum',
          },
          {
            content: 'Truffle',
          },
          {
            content: 'Remix IDE',
          },
        ],
      },
    ],
  },  
  {
    title: 'DEVOPS & HOSTING',
    portfolioItem: [
      {
        title: 'Comprehensive DevOps and Hosting Solutions',
        description:
          "Providing end-to-end DevOps and hosting solutions to ensure seamless deployment, scaling, and management of applications. Specializing in cloud infrastructure, continuous integration/continuous deployment (CI/CD), and automated monitoring to optimize performance and reliability.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'Portfolio',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'AWS',
          },
          {
            content: 'Docker',
          },
          {
            content: 'Kubernetes',
          },
          {
            content: 'Jenkins',
          },
          {
            content: 'Terraform',
          },
          {
            content: 'Nginx',
          },
        ],
      },
      {
        title: 'Scalable Hosting Solutions for High Traffic Websites',
        description:
          "Designed and implemented scalable hosting solutions to handle high traffic volumes efficiently. Focused on optimizing server configurations and using load balancing techniques to ensure smooth performance and minimal downtime.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'Portfolio',
        featuredLink: '#',
        view: '3.8K',
        love: '1.2K',
        feedback: '950',
        buildWith: [
          {
            content: 'AWS EC2',
          },
          {
            content: 'CloudFront',
          },
          {
            content: 'ElastiCache',
          },
          {
            content: 'RDS',
          },
        ],
      },
      {
        title: 'Automated Deployment Pipelines',
        description:
          "Developed automated deployment pipelines to streamline the deployment process, reduce manual errors, and accelerate release cycles. Utilized modern CI/CD tools to ensure fast and reliable updates across various environments.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'Portfolio',
        featuredLink: '#',
        view: '4.2K',
        love: '1.3K',
        feedback: '1.0K',
        buildWith: [
          {
            content: 'Jenkins',
          },
          {
            content: 'GitLab CI',
          },
          {
            content: 'CircleCI',
          },
          {
            content: 'Ansible',
          },
        ],
      },
    ],
  }  
];


export const PROCESS_STEPS = [
  {
    image: Step1,
    title: '1. Research',
    description:
      'The journey starts with understanding your unique needs and goals. I conduct in-depth research, including market analysis, user personas, and competitor benchmarks, to gain a comprehensive view of your project. This step ensures we have the insights necessary to create a strategy tailored to your objectives.',
  },
  {
    image: Step2,
    title: '2. Design',
    description:
      'Next, I craft a solution that aligns with your vision. Using wireframes, prototypes, and visual design, I create intuitive user experiences that balance aesthetics with functionality. I keep the user at the center of the design process, ensuring that every decision is guided by research insights and best practices.',
  },
  {
    image: Step3,
    title: '3. Build',
    description:
      'Finally, I bring the design to life with robust development. Using the latest technologies, I ensure your project is scalable, efficient, and future-proof. Whether its a web app, mobile app, or blockchain solution, I focus on delivering high-quality code that performs well and meets your business goals This process highlights a comprehensive, client-focused approach that emphasizes research-driven decisions, user-centered design, and high-quality development.',
  },
];

export const SERVICE_LIST = [
  {
    title: 'UI/UX Design',
    listItems: [
      {
        content: 'Design Sprints',
      },
      {
        content: 'User Research',
      },
      {
        content: 'Wireframing',
      },
      {
        content: 'Prototyping',
      },
      {
        content: 'Visual Design',
      },
      {
        content: 'High-Fidelity Prototypes',
      },
      {
        content: 'User Testing',
      },
      {
        content: 'Figma & Sketch',
      },
    ],
  },
  {
    title: 'Web Development',
    listItems: [
      {
        content: 'ReactJS',
      },
      {
        content: 'AngularJS',
      },
      {
        content: 'ASP.NET MVC',
      },
      {
        content: 'WordPress',
      },
      {
        content: 'NodeJS',
      },
      {
        content: 'GO',
      },
      {
        content: 'Express.js',
      },
      {
        content: 'MongoDB',
      },
    ],
  },
  {
    title: 'Mobile App Development',
    listItems: [
      {
        content: 'iOS Development',
      },
      {
        content: 'Android Development',
      },
      {
        content: 'React Native',
      },
      {
        content: 'Ionic & Apache Cordova',
      },
      {
        content: 'NodeJS Integration',
      },
      {
        content: '3D & VR Integration',
      },
      {
        content: 'Cross-Platform Solutions',
      },
    ],
  },
  {
    title: 'Blockchain Development',
    listItems: [
      {
        content: 'Substrate',
      },
      {
        content: 'Polkadot',
      },
      {
        content: 'Web3 Integration',
      },
      {
        content: 'Smart Contracts',
      },
      {
        content: 'Decentralized Apps (dApps)',
      },
      {
        content: 'Tokenization',
      },
    ],
  },
  {
    title: 'DevOps & Hosting',
    listItems: [
      {
        content: 'AWS',
      },
      {
        content: 'Docker',
      },
      {
        content: 'Kubernetes',
      },
      {
        content: 'CI/CD Pipelines',
      },
      {
        content: 'Terraform',
      },
      {
        content: 'Nginx & Apache',
      },
      {
        content: 'Automated Monitoring',
      },
    ],
  },
];
export const SKILLS = [
  {
    title: 'UI/UX Design',
    description:
      'I can help create intuitive, user-centric designs that enhance user experience through detailed user research, wireframing, prototyping, and visual design. Whether you need a full design overhaul or targeted improvements, I can bring your vision to life with a seamless and aesthetic interface."',
    icon: SkillIcon2,
    successRate: '100',
  },
  {
    title: 'Web Development',
    description:
      'I build scalable and high-performance web applications tailored to your needs. From simple websites to complex web apps, using leading-edge technologies, I can turn your ideas into a fully functional, responsive, and modern digital solution',
    icon: SkillIcon3,
    successRate: '100',
  },
  {
    title: 'Mobile App Development',
    description:
      "Need a mobile app? I specialize in building powerful, efficient apps for both iOS and Android. Whether it's a native or hybrid app, I'll ensure a smooth and engaging user experience across platforms.",
    icon: SkillIcon4,
    successRate: '100',
  },
  {
    title: 'Blockchain Development',
    description:
      "I can assist in building secure and reliable blockchain solutions, including smart contracts and decentralized applications (dApps). If you're exploring blockchain technologies like Substrate and Polkadot, I offer expertise to bring your innovative ideas to the forefront.",
    icon: SkillIcon3,
    successRate: '100',
  },
  {
    title: 'DevOps & Hosting',
    description:
      "With extensive experience in cloud services, containerization, and orchestration, I can streamline your deployment processes and ensure your applications are always running smoothly. I’ll help you optimize infrastructure and manage hosting efficiently.",
    icon: SkillIcon3,
    successRate: '100',
  },
];

export const CLIENTS = [
  {
    image: Client1,
    title: 'Gallina E Palo Hotel',
  },
  {
    image: Client2,
    title: 'Crown Sterling',
  },
  {
    image: Client3,
    title: 'Combatant Gentleman',
  },
  {
    image: Client4,
    title: 'Cuttlesoft',
  },
  {
    image: Client5,
    title: 'Various Freelance Clients',
  },
];

export const TESTIMONIAL = [
  {
    image: Reviewer1,
    review:
      'Jesse is a talented developer who provided excellent web and mobile solutions. His attention to detail and client satisfaction is outstanding.',
    name: 'Client A',
    designation: 'Founder',
    twitterProfile: 'https://twitter.com/clientA',
    organization: '@ClientA',
    organizationURL: 'https://clientA.com',
  },
  {
    image: Reviewer2,
    review:
      'Exceptional blockchain and web development services. Highly recommend Jesse for his innovative approach and reliability.',
    name: 'Client B',
    designation: 'CEO',
    twitterProfile: 'https://twitter.com/clientB',
    organization: '@ClientB',
    organizationURL: 'https://clientB.com',
  },
  {
    image: Reviewer3,
    review:
      'Jesse’s expertise in mobile app development transformed our project. His professionalism and skill are unmatched.',
    name: 'Client C',
    designation: 'CTO',
    twitterProfile: 'https://twitter.com/clientC',
    organization: '@ClientC',
    organizationURL: 'https://clientC.com',
  },
];

export const FOOTER_MENU = [
  {
    label: 'Contact',
    path: '#',
  },
  {
    label: 'Privacy',
    path: '#',
  },
  {
    label: 'Cookie Policy',
    path: '#',
  },
];

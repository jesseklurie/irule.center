import BlogImage1 from '../../assets/image/agency/blog/blog-img1.png';
import BlogImage2 from '../../assets/image/agency/blog/blog-img2.png';
import BlogImage3 from '../../assets/image/agency/blog/blog-img3.png';
import Member1 from '../../assets/image/agency/team/member-1.jpg';
import Member2 from '../../assets/image/agency/team/member-2.jpg';
import Member3 from '../../assets/image/agency/team/member-3.jpg';
import Denny from '../../assets/image/agency/client/denny.png';
import Menny from '../../assets/image/agency/client/menny.png';
import JacoDreamRentals from '../../assets/image/costa-rica.jpg';
import Gallina from '../../assets/image/gallina.jpeg'
import SolunaMystica from '../../assets/image/solunamystica.jpg'
import RealtyGroup from '../../assets/image/iphone-mockup.png'
import PuraVidaBookings from '../../assets/image/pura-vida-bookings-logo.png'
import TasteOfJaco from '../../assets/image/taste-of-jaco.png'
import buenaVibraHero from '../../assets/image/buenaVibraHero.webp'

// QR-Full-White-Transparent.png
// solunamystica.jpg

const data = {
  menuItems: [
    {
      label: 'Feature',
      path: '#featureSection',
      offset: '80',
    },
    {
      label: 'Work History',
      path: '#workHistorySection',
      offset: '67',
    },
    {
      label: 'Portfolio',
      path: '#blogSection',
      offset: '67',
    },
    {
      label: 'Quality feature',
      path: '#qualitySection',
      offset: '67',
    },
    {
      label: 'Testimonial',
      path: '#testimonialSection',
      offset: '100',
    },
    {
      label: 'Team Member',
      path: '#teamSection',
      offset: '67',
    },
    {
      label: 'FAQ',
      path: '#faqSection',
      offset: '67',
    },
  ],
  aboutus: [
    {
      id: 1,
      title: 'Amazing communication experience.',
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: 'Best designing experience with trending tools and sizes.',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Training and communication method remotely.',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: '24/7 Hour onine supports.',
      icon: 'flaticon-next',
    },
  ],
  features: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Search Optimization',
      description:
        'By using Search Engine Optimization, You will get more Clients',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Ui/UX Design',
      description:
        'We provide the best UI/UX Design by following the latest trends of the market .',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Wireframing Task',
      description:
        'We respect our customer opinions and deals with them with perfect wireframing ',
    },
    {
      id: 4,
      icon: 'flaticon-startup',
      title: 'Business Solutions',
      description:
        'We are commited to provide proper business solutions with reasonable pricing',
    },
    {
      id: 5,
      icon: 'flaticon-briefing',
      title: 'Business Analysis',
      description:
        'A day to day report about your ongoing business for proper understanding',
    },
    {
      id: 6,
      icon: 'flaticon-creative',
      title: 'Content Management',
      description:
        'Proper Content Management is important to find out the real clients for your agencies',
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Search Optimization',
      description:
        'By using Search Engine Optimization, You will get more Clients.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Wireframing Task',
      description:
        'We respect our customer opinions and deals with them with perfect wireframing.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Ui/Ux Design',
      description:
        'We provide the best UI/UX Design by following the latest trends of the market .',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Content Writting',
      description:
        'Proper Content Management is important to find out the real clients for your agencies .',
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Jaco Dream Rentals',
      thumbnail_url: BlogImage1,
      date: 'December 01, 2024',
      postLink: '#1',
      url: "https://jacodreamrentals.com",
      thumbnail_url: JacoDreamRentals,
    },
    {
      id: 2,
      title: 'Gallina De Palo',
      thumbnail_url: BlogImage2,
      date: 'August 12, 2024',
      postLink: '#2',
      url: "https://jacococal.com",
      thumbnail_url: Gallina,
    },
    {
      id: 3,
      title: 'Soluna Mystica',
      thumbnail_url: BlogImage3,
      date: 'September 2, 2024',
      postLink: '#3',
      url: "https://solunamystica.com",
      thumbnail_url: SolunaMystica,
      
    },
    {
      id: 4,
      title: 'Q Realty Group Costa Rica',
      date: 'January 1, 2025',
      postLink: '#3',
      url: "https://q-realty-group-costa-ricas-1066146827962.us-east1.run.app",
      thumbnail_url: RealtyGroup,
    },
    {
      id: 5,
      title: 'Pura Vida Bookings',
      date: 'December 26, 2024',
      postLink: '#3',
      url: "https://pura-vida-bookings-839155913812.us-east1.run.app",
      thumbnail_url: PuraVidaBookings,
      
    },
    {
      id: 6,
      title: 'Taste Of Jaco',
      date: 'September 14, 2024',
      postLink: '#3',
      url: "https://tasteofjaco.com/",
      thumbnail_url: TasteOfJaco,
      
    },
    {
      id: 7,
      title: 'Buena Vibra Tattoo Studio',
      date: 'November 3, 2024',
      postLink: '#3',
      url: "https://buena-vibra-tattoo-772105218158.us-central1.run.app/",
      thumbnail_url: buenaVibraHero,
      
    },
  ],
  teamMember: [
    {
      id: 1,
      name: 'Jessica Fanddy',
      thumbnail_url: Member1,
      designation: 'Co Founder',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 2,
      name: 'Devid Justingul',
      thumbnail_url: Member2,
      designation: 'Senior Ui/UX Designer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 3,
      name: 'Handdy Albuzz',
      thumbnail_url: Member3,
      designation: 'Article Writer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
  ],
  testimonial: [
    {
      id: 1,
      name: 'Jon Doe',
      designation: 'CEO of Denish Co.',
      comment:
        'Best working experience  with this amazing team & in future, we want to work together',
      avatar_url: Denny,
    },
    {
      id: 2,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
    {
      id: 3,
      name: 'Jone Doe',
      designation: 'Director of Beauty-queen',
      comment:
        'I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme',
      avatar_url: Denny,
    },
    {
      id: 4,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: 'How to contact with Customer Service?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
    },
    {
      id: 2,
      title: 'App installation failed, how to update system information?',
      description:
        'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
    },
    {
      id: 3,
      title: 'Website reponse taking time, how to improve?',
      description:
        'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
    },
    {
      id: 4,
      title: 'New update fixed all bug and issues?',
      description:
        'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
    },
  ],
  menuWidget: [
    {
      id: 1,
      title: 'About Us',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Support Center',
        },
        {
          id: 2,
          url: '#2',
          text: 'Customer Support',
        },
        {
          id: 3,
          url: '#3',
          text: 'About Us',
        },
        {
          id: 4,
          url: '#4',
          text: 'Copyright',
        },
        {
          id: 5,
          url: '#5',
          text: 'Popular Campaign',
        },
      ],
    },
    {
      id: 2,
      title: 'Our Information',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Return Policy',
        },
        {
          id: 2,
          url: '#2',
          text: 'Privacy Policy',
        },
        {
          id: 3,
          url: '#2',
          text: 'Terms & Conditions',
        },
        {
          id: 4,
          url: '#4',
          text: 'Site Map',
        },
        {
          id: 5,
          url: '#5',
          text: 'Store Hours',
        },
      ],
    },
    {
      id: 3,
      title: 'My Account',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Press inquiries',
        },
        {
          id: 2,
          url: '#2',
          text: 'Social media directories',
        },
        {
          id: 3,
          url: '#3',
          text: 'Images & B-roll',
        },
        {
          id: 4,
          url: '#4',
          text: 'Permissions',
        },
        {
          id: 5,
          url: '#5',
          text: 'Speaker requests',
        },
      ],
    },
    {
      id: 4,
      title: 'Policy',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Application security',
        },
        {
          id: 2,
          url: '#2',
          text: 'Software principles',
        },
        {
          id: 3,
          url: '#3',
          text: 'Unwanted software policy',
        },
        {
          id: 4,
          url: '#4',
          text: 'Responsible supply chain',
        },
      ],
    },
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: '#1',
    },
    {
      id: 2,
      icon: 'flaticon-twitter-logo-silhouette',
      link: '#2',
    },
    {
      id: 3,
      icon: 'flaticon-instagram',
      link: '#3',
    },
    {
      id: 4,
      icon: 'flaticon-tumblr-logo',
      link: '#4',
    },
    {
      id: 5,
      icon: 'flaticon-dribble-logo',
      link: '#5',
    },
  ],
};
export default data;

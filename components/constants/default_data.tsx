import { navigationType,social_dataType} from '../types';

export const navigation :Array<navigationType> = [
  { id: 1, title: 'About me', path: '/about' },
  { id: 2, title: 'Skills & Experience', path: '/skills' },
  { id: 3, title: 'Education', path: '/education' },
  { id: 4, title: 'Contact', path: '/contact' },
  { id: 5, title: 'Currency', path: '/currency' },

];
export  const social_data: Array<social_dataType> = [
  {
    link: 'https://github.com/MarharytaSomash',
    className: 'git',
    icon: 'github.png',

  },
  {
    link: 'https://www.linkedin.com/in/marharyta-somash-aa7010197/',
    className: 'linkDin',
    icon: 'linkedin.png',
    
  },
  {
    link: 'https://t.me/MarharytaSomash',
    className: 'tg',
    icon: 'telegram.png',
    
  },
]
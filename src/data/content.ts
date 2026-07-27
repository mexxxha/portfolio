import Logo from '../assets/logo.svg';
import heroImage from '../assets/hero.jpg';

export const content = {
  site: {
    title: 'Mecha | Portfolio',
    description: 'Web制作のポートフォリオ',
    lang: 'ja',
    ogImage: '/ogp.png',
  },
  logo: {
    src: Logo,
    alt: 'Mecha | ロゴ'
  },
  sectionTitles: {
    hero: {
      title: 'MECHA',
      subtitle: 'portfolio',
    },
  },
  hero: {
    title: 'Mecha | portfolio',
    subtitle: 'PORTFOLIO',
    image: heroImage,
    imageAlt: '',
  },
} as const;
import type { SiteContent } from '../types/type';
import Logo from '../assets/logo.svg';
import heroImage from '../assets/hero.jpg';
import profileImage from '../assets/profile.jpg';

export const content = {
  site: {
    title: 'Mecha',
    description: 'Mechaのポートフォリオ',
    lang: 'ja',
    ogImage: '/ogp.png',
  } satisfies SiteContent,

  socials: [
    { label: '_mechaxx', href: '#', icon: 'simple-icons:x' },
    { label: 'mexaquin', href: '#', icon: 'simple-icons:instagram' },
  ],

  nav: [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '#about' },
    { label: 'WORKS', href: '#works' },
    { label: 'CONTACT', href: '#contact' },
  ],

  logo: {
    src: Logo,
    alt: 'Mecha | ロゴ',
  },

  sectionTitles: {
    hero: {
      title: 'MECHA',
      subtitle: 'portfolio',
    },

    about: {
      title: 'ABOUT',
      subtitle: 'about',
    },

    skills: {
      title: 'SKILLS',
      subtitle: 'skills',
    },

    works: {
      title: 'WORKS',
      subtitle: 'works',
    },

    blog: {
      title: 'BLOG',
      subtitle: 'blog',
    },

    contact: {
      title: 'CONTACT',
      subtitle: 'contact',
    },
  },

  hero: {
    image: heroImage,
    imageAlt: '',
  },

  about: {
    profile: {
      image: profileImage,
      alt: 'プロフィール画像',
      name: 'Mecha',
      role: 'Front-End Developer',
      bio: 'テキストテキストテキストテキストテキストテキストテキスト',
      facts: [
        { label: 'Based in', value: 'Tokyo, Japan' },
        { label: 'Born', value: '1996' },
        { label: 'Experience', value: '5 months'},
      ],
    },
  },

  skills: {},

  works: {},

  contact: {},
} as const;

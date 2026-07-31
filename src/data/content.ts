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
    { label: '_mechaxx', href: 'https://x.com/_mechaxx', icon: 'simple-icons:x' },
    { label: 'mexaquin', href: 'https://www.instagram.com/mexaquin/', icon: 'simple-icons:instagram' },
  ],

  nav: [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'WORKS', href: '/works' },
    { label: 'BLOG', href: '/blog' },
    { label: 'CONTACT', href: '/contact' },
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
      empty: '制作実績はまだありません。',
    },

    blog: {
      title: 'BLOG',
      subtitle: 'blog',
      empty: '記事はまだありません。',
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
        { label: 'Experience', value: '5 months' },
      ],
    },
  },

  skills: {
    skill: {
      title: 'Skill',
      items: [
        { name: 'HTML', icon: 'simple-icons:html5' },
        { name: 'CSS / SCSS', icon: 'simple-icons:sass' },
        { name: 'JavaScript', icon: 'simple-icons:javascript' },
        { name: 'Astro', icon: 'simple-icons:astro' },
      ],
    },
    learning: {
      title: 'Learning',
      items: [
        { name: 'React', icon: 'simple-icons:react' },
        { name: 'TypeScript', icon: 'simple-icons:typescript' },
        { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      ],
    },
  },

  contact: {
    lead: 'ご依頼・ご相談はお気軽にご連絡ください。',
    email: {
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    form: {
      nameLabel: 'お名前',
      emailLabel: 'メールアドレス',
      messageLabel: 'お問い合わせ内容',
      submitLabel: '送信する',
    },
  },

  footer: {
    nav: [
      { label: 'HOME', href: '/' },
      { label: 'ABOUT', href: '/#about' },
      { label: 'WORKS', href: '/works' },
      { label: 'BLOG', href: '/blog' },
      { label: 'CONTACT', href: '/contact' },
    ],
    copyright: 'Mecha',
  },

  aboutPage: {
    lead: 'Webのフロントエンドを中心に、デザインから実装まで一貫して手を動かしています。',
    history: [
      { year: '2024', title: '独学でWeb制作を開始', description: 'HTML / CSS / JavaScript を中心に学習。' },
      { year: '2025', title: 'コーダーとして実務開始', description: 'LP・コーポレートサイトのコーディングを担当。' },
    ],
  },
} as const;

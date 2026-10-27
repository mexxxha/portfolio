import type { SiteContent } from '../types/type';
import Logo from '../assets/logo.svg';
import heroImage from '../assets/hero.jpg';
import profileImage from '../assets/profile.jpg';

export const content = {
  brand: {
    name: 'Mecha',
    alternateName: 'Mecha（めちゃ）'
  },
  site: {
    title: 'Mecha',
    description: 'Mechaの個人サイト。ブログ、制作物、個人開発、音楽など、日々の活動や好きなものを記録しています。',
    lang: 'ja',
    ogImage: '/ogp.png',
    ogImageWidth: 1200,
    ogImageHeight: 628,
  } satisfies SiteContent,

  socials: [
    { label: '_mechaxx', href: 'https://x.com/_mechaxx', icon: 'simple-icons:x', ariaLabel: 'X:_mechaxx（新しいタブで開く）' },
    { label: 'mexaquin', href: 'https://www.instagram.com/mexaquin/', icon: 'simple-icons:instagram', ariaLabel: 'Instagram:mexaquin（新しいタブで開く）' },
  ],

  nav: [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about/' },
    { label: 'WORKS', href: '/works/' },
    { label: 'BLOG', href: '/blog/' },
    { label: 'CONTACT', href: '/contact/' },
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
      alt: 'Mechaのプロフィールアイコン',
      name: 'Mecha',
      role: 'Front-End Developer',
      bio: [
        'はじめまして。Mecha（めちゃ）です。',
        'ここは、僕が作ったものや日々の出来事、考えていたことなどを自由に残している個人サイトです。\nプログラミングのことを書いたり、好きなものについて話したり、特にテーマは決めていません。\n\nあとから自分で見返せるように、いろんなことを少しずつ残していけたらと思っています。',
      ].join('\n\n'),
      facts: [
        { label: 'Based in', value: 'Tokyo, Japan' },
        { label: 'Born', value: '1996' },
        { label: 'Experience', value: 'Since 2024' },
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
    formUrl: 'https://forms.gle/uCoaTy4fxyEBYJ2Z9',
    formLabel: 'お問い合わせフォームへ',
  },

  footer: {
    copyright: 'Mecha',
  },

  aboutPage: {
    lead: [
      'こんにちは、Mechaです。',
      '普段はWebサイトを作ったり、プログラミングを勉強したりしています。',
      '興味を持つことは結構バラバラで、気になったことを調べたり、何かを作ってみたり、いろんなことを考えたりしています。',
      'そんな日々の中で、せっかくなら自分がやってきたことや考えていたことを、どこかに残しておきたいと思うようになりました。\nそれで作ったのが、このサイトです。',
      'ブログを書いたり、作ったものを公開したり、好きなものについて話したり。内容に特に決まりはありません。あとから読み返したときに、当時の自分が何をしていて、何を考えていたのかが分かる。そんな場所にできたらいいなと思っています。',
      '自分で作るサイトなので、デザインや動きにも好きなようにこだわっていきたいと思っています。これから何を載せていくかは、まだ自分でも分かりませんが、気ままに続けていくつもりです。',
    ].join('\n\n'),
    history: [
      { year: '2024', title: '職業訓練校でWeb制作を開始', description: 'Webデザイナー科で HTML / CSS と制作ツールを学ぶ。卒業後、上京。' },
      { year: '2025', title: 'LP・コーポレートサイトの制作を担当', description: 'プロジェクトの立ち上げから、実装・見た目の調整まで担当。' },
    ],
  },
} as const;

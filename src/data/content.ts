import type { SiteContent } from '../types/type';
import Logo from '../assets/logo.svg';
import heroImage from '../assets/hero.jpg';
import profileImage from '../assets/profile.jpg';

export const content = {
  site: {
    title: 'Mecha',
    description: 'Mecha（mexcha.com）のポートフォリオ。フロントエンドを中心に制作しています。',
    lang: 'ja',
    ogImage: '/ogp.png',
  } satisfies SiteContent,

  socials: [
    { label: '_mechaxx', href: 'https://x.com/_mechaxx', icon: 'simple-icons:x', ariaLabel: 'X:_mechaxx（新しいタブで開く）' },
    { label: 'mexaquin', href: 'https://www.instagram.com/mexaquin/', icon: 'simple-icons:instagram', ariaLabel: 'Instagram:mexaquin（新しいタブで開く）' },
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
      alt: 'Mechaのプロフィールアイコン',
      name: 'Mecha',
      role: 'Front-End Developer',
      bio: [
        'はじめまして。Mecha（めちゃ）です。',
        '東京を拠点に、LP・コーポレートサイト・ポートフォリオを中心としたWeb制作をしています。\n見た目の設計から実装まで行っています。',
      ].join('\n\n'),
      facts: [
        { label: 'Based in', value: 'Tokyo, Japan' },
        { label: 'Born', value: '1996' },
        { label: 'Experience', value: 'since2024' },
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
      '東京を拠点に、LP・コーポレートサイト・個人のポートフォリオを中心としたWeb制作をしています。肩書きとしてはフロントエンド寄りですが、見た目の設計から実装まで、同じ作業のなかで進めています。',
      'パソコンはずっと身近な道具でした。本格的に作り始めたのは、2024年に職業訓練校のWebデザイナー科へ通ったことがきっかけです。かっこいいサイト、かわいいサイトを自分の手で作りたいという気持ちが、いちばん大きかったです。自分で立つ環境を選ぶために上京しました。',
      'いまの現場では、制作の必要を自分から提案するところから入っています。どのツールを使うか、どこまで作るか、何を削るか、機能を足すときの値段まで含めて、プロジェクトの立ち上げから担当しています。AIも使いますが、揃った書き方と、よく見えるかを自分の目で見ることは外していません。\nコードは自分で書くほうが好きです（笑）',
      '未経験からのスタートなので、わからないことはまだ多いです。いまは Next.js の環境で React と TypeScript を学んでいます。これから特にこれ、という一本はないですが、案件の幅は広げていきたいです。',
    ].join('\n\n'),
    history: [
      { year: '2024', title: '職業訓練校でWeb制作を開始', description: 'Webデザイナー科で HTML / CSS と制作ツールを学ぶ。卒業後、上京。' },
      { year: '2025', title: 'LP・コーポレートサイトの制作を担当', description: 'プロジェクトの立ち上げから、実装・見た目の調整まで担当。' },
    ],
  },
} as const;

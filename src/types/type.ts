import type { ImageMetadata } from 'astro';

export interface SiteContent {
  title: string;
  description: string;
  lang: string;
  ogImage: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Logo {
  src: ImageMetadata;
  alt: string;
}

export interface SectionTitleContent {
  title: string;
  subtitle: string;
}

export interface HeroContent {
  image: ImageMetadata;
  imageAlt: string;
}

export interface AboutContent {
  title: string;
}

export interface SkillsContent {
  title: string;
}

export interface WorksContent {
  title: string;
}

export interface BlogContent {
  title: string;
}

export interface ContactContent {
  title: string;
}
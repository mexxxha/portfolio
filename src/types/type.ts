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
  ariaLabel?: string;
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
  empty?: string;
}

export interface AboutProfile {
  image: ImageMetadata;
  alt: string;
  name: string;
  role: string;
  bio: string;
  facts: { label: string; value: string }[];
}

export interface SkillGroup {
  title: string;
  items: { name: string; icon: string }[];
}

export interface ContactContent {
  lead: string;
  formUrl: string;
  formLabel: string;
}

export interface FooterContent {
  copyright: string;
}

export interface AboutPageContent {
  lead: string;
  history: { year: string; title: string; description: string }[];
}
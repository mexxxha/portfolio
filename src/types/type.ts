import type { ImageMetadata } from 'astro';

export interface siteContent {
  title: string;
  description: string;
  lang: string;
  onImgae: string;
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
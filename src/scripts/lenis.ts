import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

const start = () => {
  if (prefersReducedMotion) return;
  lenis?.destroy();
  lenis = new Lenis({ autoRaf: true, lerp: 0.1, duration: 1.2, anchors: true });
};

start();
document.addEventListener('astro:page-load', start);
document.addEventListener('astro:before-swap', () => {
  lenis?.destroy();
  lenis = null;
});
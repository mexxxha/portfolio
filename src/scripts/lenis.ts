import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// --- Gate ---
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const isMobile = window.matchMedia('(hover: none), (pointer: coarse), (max-width: 768px)');
const canUseLenis = () => !prefersReducedMotion.matches && !isMobile.matches;

// --- Instance ---
let lenis: Lenis | null = null;

const stop = () => {
  lenis?.destroy();
  lenis = null;
};

const start = () => {
  stop();
  if (!canUseLenis()) return;
  lenis = new Lenis({ autoRaf: true, lerp: 0.1, duration: 1.2, anchors: true });
};

// --- Boot ---
start();
document.addEventListener('astro:page-load', start);
document.addEventListener('astro:before-swap', stop);

isMobile.addEventListener('change', start);
prefersReducedMotion.addEventListener('change', start);

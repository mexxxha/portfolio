import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.1,
    duration: 1.2,
    anchors: true,
    // syncTouch: true,
  });
}

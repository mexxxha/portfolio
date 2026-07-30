// src/scripts/shuffleText.ts
import ShuffleText from 'shuffle-text';

const targets =
  document.querySelectorAll<HTMLElement>('[data-shuffle-text]');

const observer = new IntersectionObserver(
  (entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target as HTMLElement;
      const shuffleText = new ShuffleText(element);

      shuffleText.sourceRandomCharacter = '░▒▓█';
      shuffleText.duration = 900;
      shuffleText.start();

      currentObserver.unobserve(element);
    });
  },
  { threshold: 0.3 },
);

targets.forEach((target) => observer.observe(target));
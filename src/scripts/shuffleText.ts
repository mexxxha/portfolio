import ShuffleText from 'shuffle-text';

let observer: IntersectionObserver | null = null;

const init = () => {
  observer?.disconnect();

  observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target as HTMLElement;
        const shuffleText = new ShuffleText(element);

        shuffleText.sourceRandomCharacter = '░▒▓█';
        shuffleText.duration = 850;
        shuffleText.start();

        currentObserver.unobserve(element);
      });
    },
    { threshold: 0.3 },
  );

  document
    .querySelectorAll<HTMLElement>('[data-shuffle-text]')
    .forEach((target) => observer?.observe(target));
};

init();
document.addEventListener('astro:page-load', init);
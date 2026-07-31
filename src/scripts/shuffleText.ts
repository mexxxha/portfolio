import ShuffleText from 'shuffle-text';

let observer: IntersectionObserver | null = null;
let waitingForLoad = false;

const isPageReady = () => document.documentElement.classList.contains('is-loaded');

const play = (element: HTMLElement) => {
  if (element.dataset.shufflePlaying === 'true') return;

  const inLoading = element.closest('.loading') !== null;
  if (!inLoading && !isPageReady()) return;

  const original = element.dataset.shuffleOriginal ?? element.textContent ?? '';
  element.textContent = original;
  element.dataset.shufflePlaying = 'true';

  const shuffleText = new ShuffleText(element);
  shuffleText.sourceRandomCharacter = '░▒▓█';
  shuffleText.emptyCharacter = '░';
  shuffleText.duration = 850;
  shuffleText.start();

  window.setTimeout(() => {
    element.textContent = original;
    element.dataset.shufflePlaying = 'false';
  }, shuffleText.duration + 50);
};

const init = () => {
  observer?.disconnect();

  observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;

        const inLoading = element.closest('.loading') !== null;
        if (!inLoading && !isPageReady()) return;

        play(element);
        currentObserver.unobserve(element);
      });
    },
    { threshold: 0.3 },
  );

  document.querySelectorAll<HTMLElement>('[data-shuffle-text]').forEach((target) => {
    if (target.closest('.loading')) return;
    target.dataset.shufflePlaying = 'false';
    if (!target.dataset.shuffleOriginal) {
      target.dataset.shuffleOriginal = target.textContent ?? '';
    }
    observer?.observe(target);
  });

  if (!isPageReady() && !waitingForLoad) {
    waitingForLoad = true;

    const onReady = () => {
      waitingForLoad = false;
      init();
    };

    const check = () => {
      if (isPageReady()) {
        onReady();
        return;
      }
      requestAnimationFrame(check);
    };
    check();
  }
};

init();
document.addEventListener('astro:page-load', init);
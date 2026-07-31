import ShuffleText from 'shuffle-text';

let observer: IntersectionObserver | null = null;
let waitingForLoad = false;

// --- Gate ---
const isPageReady = () => document.documentElement.classList.contains('is-loaded');
const isInLoading = (element: HTMLElement) => element.closest('.loading') !== null;
const canPlay = (element: HTMLElement) => isInLoading(element) || isPageReady();

// --- Play ---
const play = (element: HTMLElement) => {
  if (element.dataset.shufflePlaying === 'true') return;
  if (!canPlay(element)) return;

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

// --- Observe ---
const observeTargets = () => {
  observer?.disconnect();

  observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;

        // ページ未準備なら unobserve しない（ロード後に再判定）
        if (!canPlay(element)) return;

        play(element);
        currentObserver.unobserve(element);
      });
    },
    { threshold: 0.3 },
  );

  document.querySelectorAll<HTMLElement>('[data-shuffle-text]').forEach((target) => {
    if (isInLoading(target)) return;
    target.dataset.shufflePlaying = 'false';
    if (!target.dataset.shuffleOriginal) {
      target.dataset.shuffleOriginal = target.textContent ?? '';
    }
    observer?.observe(target);
  });
};

// --- WaitLoaded ---
const waitUntilLoaded = (onReady: () => void) => {
  if (isPageReady() || waitingForLoad) return;

  waitingForLoad = true;

  const check = () => {
    if (!isPageReady()) {
      requestAnimationFrame(check);
      return;
    }
    waitingForLoad = false;
    onReady();
  };

  check();
};

// --- Boot ---
const init = () => {
  observeTargets();
  waitUntilLoaded(init);
};

init();
document.addEventListener('astro:page-load', init);

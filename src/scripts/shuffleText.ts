import ShuffleText from 'shuffle-text';

let observer: IntersectionObserver | null = null;

const play = (element: HTMLElement) => {
  if (element.dataset.shufflePlaying === 'true') return;

  const original = element.dataset.shuffleOriginal ?? element.textContent ?? '';
  element.textContent = original;
  element.dataset.shufflePlaying = 'true';

  const shuffleText = new ShuffleText(element);
  shuffleText.sourceRandomCharacter = '░▒▓█';
  shuffleText.emptyCharacter = '░'; // 任意（デフォルトが "-"）
  shuffleText.duration = 850;
  shuffleText.start();

  window.setTimeout(() => {
    element.textContent = original; // 保険で原文に戻す
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
        play(element);
        currentObserver.unobserve(element);
      });
    },
    { threshold: 0.3 },
  );

  document
    .querySelectorAll<HTMLElement>('[data-shuffle-text]')
    .forEach((target) => {
      // ページ遷移のたびに再生したいなら playing をリセット
      target.dataset.shufflePlaying = 'false';
      if (!target.dataset.shuffleOriginal) {
        target.dataset.shuffleOriginal = target.textContent ?? '';
      }
      observer?.observe(target);
    });
};

init();
document.addEventListener('astro:page-load', init);
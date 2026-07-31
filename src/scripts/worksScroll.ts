let activeIndex = -1;
let onScroll: (() => void) | null = null;
let onLoad: (() => void) | null = null;

// --- Lifecycle ---
const cleanup = () => {
  if (onScroll) {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    onScroll = null;
  }
  if (onLoad) {
    window.removeEventListener('load', onLoad);
    onLoad = null;
  }
  activeIndex = -1;
};

// --- State ---
const createSetActive = (panels: NodeListOf<HTMLElement>, current: HTMLElement | null) => {
  return (index: number) => {
    if (index === activeIndex) return;
    activeIndex = index;

    panels.forEach((panel) => {
      const panelIndex = Number(panel.dataset.index);
      panel.classList.toggle('is-active', panelIndex === index);
    });

    if (current) current.textContent = String(index + 1);
  };
};

// --- Sync ---
const getIndexFromScroll = (steps: NodeListOf<HTMLElement>) => {
  const viewportCenter = window.innerHeight / 2;
  let nearestIndex = 0;
  let nearestDistance = Infinity;

  steps.forEach((step) => {
    const rect = step.getBoundingClientRect();
    const stepCenter = rect.top + rect.height / 2;
    const distance = Math.abs(stepCenter - viewportCenter);

    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = Number(step.dataset.index ?? 0);
    }
  });

  return nearestIndex;
};

// --- Boot ---
const init = () => {
  cleanup();

  const steps = document.querySelectorAll<HTMLElement>('[data-works-step]');
  const panels = document.querySelectorAll<HTMLElement>('[data-works-panel]');
  const current = document.querySelector<HTMLElement>('[data-works-current]');

  if (steps.length <= 1 || panels.length <= 1) return;

  const setActive = createSetActive(panels, current);
  const syncFromScroll = () => setActive(getIndexFromScroll(steps));

  onScroll = syncFromScroll;
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  syncFromScroll();
  requestAnimationFrame(syncFromScroll);

  if (document.readyState !== 'complete') {
    onLoad = syncFromScroll;
    window.addEventListener('load', onLoad, { once: true });
  }
};

init();
document.addEventListener('astro:page-load', init);
document.addEventListener('astro:before-swap', cleanup);
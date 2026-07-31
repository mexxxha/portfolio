const steps = document.querySelectorAll<HTMLElement>('[data-works-step]');
const panels = document.querySelectorAll<HTMLElement>('[data-works-panel]');
const current = document.querySelector<HTMLElement>('[data-works-current]');

if (steps.length <= 1 || panels.length <= 1) {
  // no-op
} else {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let activeIndex = -1; // 初回は必ず setActive が走るようにする

  const setActive = (index: number) => {
    if (index === activeIndex) return;
    activeIndex = index;

    panels.forEach((panel) => {
      const panelIndex = Number(panel.dataset.index);
      panel.classList.toggle('is-active', panelIndex === index);
    });

    if (current) {
      current.textContent = String(index + 1);
    }
  };

  const getIndexFromScroll = () => {
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

  const syncFromScroll = () => {
    setActive(getIndexFromScroll());
  };

  if (prefersReducedMotion) {
    syncFromScroll();
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const index = Number((visible.target as HTMLElement).dataset.index ?? 0);
        setActive(index);
      },
      {
        root: null,
        threshold: [0.4, 0.6, 0.8],
        rootMargin: '-20% 0px -20% 0px',
      },
    );

    steps.forEach((step) => observer.observe(step));

    // スクロール復元後に合わせる
    syncFromScroll();
    requestAnimationFrame(syncFromScroll);
    window.addEventListener('load', syncFromScroll, { once: true });
  }
}

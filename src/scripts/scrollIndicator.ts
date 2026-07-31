const updateIndicator = () => {
  const indicatorScroll = document.querySelector<HTMLElement>('.scroll__ruler');
  if (!indicatorScroll) return;

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

  indicatorScroll.style.setProperty('--progress', String(progress));
};

window.addEventListener('scroll', updateIndicator, { passive: true });
window.addEventListener('resize', updateIndicator);
document.addEventListener('astro:page-load', updateIndicator);

updateIndicator();

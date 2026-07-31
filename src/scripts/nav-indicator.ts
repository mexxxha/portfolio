const normalize = (path: string) => path.replace(/\/+$/, '') || '/';

const update = (animation: boolean) => {
  const nav = document.querySelector<HTMLElement>('.header__nav');
  const indicator = document.querySelector<HTMLElement>('.header__nav_indicator');
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.header__nav_link'));
  if (!nav || !indicator || links.length === 0) return;

  const current = normalize(location.pathname);
  const active =
    links.find((link) => {
      const target = normalize(link.pathname);
      return target === '/' ? current === '/' : current === target || current.startsWith(`${target}/`);
    }) ?? links[0];

  if (!animation) indicator.style.transition = 'none';

  const navRect = nav.getBoundingClientRect();
  const linkRect = active.getBoundingClientRect();

  indicator.style.width = `${linkRect.width}px`;
  indicator.style.height = `${linkRect.height}px`;
  indicator.style.transform = `translate(${linkRect.left - navRect.left}px, ${linkRect.top - navRect.top}px)`;

  if (!animation) {
    indicator.offsetHeight;
    indicator.style.transition = '';
  }

  links.forEach((link) => link.classList.remove('is-active'));
  active.classList.add('is-active');
};

update(false);
document.fonts.ready.then(() => update(false));
// window.addEventListener('resize', () => update(false));
document.addEventListener('astro:page-load', () => update(true));

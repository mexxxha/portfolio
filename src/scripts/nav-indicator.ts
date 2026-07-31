const normalize = (path: string) => path.replace(/\/+$/, '') || '/';

const isMatch = (hrefPath: string, current: string) => {
  const target = normalize(hrefPath);
  return target === '/' ? current === '/' : current === target || current.startsWith(`${target}/`);
};

const syncActive = (links: HTMLAnchorElement[], current: string) => {
  let active: HTMLAnchorElement | null = null;

  links.forEach((link) => {
    const matched = isMatch(link.pathname, current);
    link.classList.toggle('is-active', matched);
    if (matched) {
      link.setAttribute('aria-current', 'page');
      active = link;
    } else {
      link.removeAttribute('aria-current');
    }
  });

  return active;
};

const update = (animation: boolean) => {
  const nav = document.querySelector<HTMLElement>('.header__nav');
  const indicator = document.querySelector<HTMLElement>('.header__nav_indicator');
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.header__nav_link'));
  const overlayLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.header__overlay_link'));
  if (!nav || !indicator || navLinks.length === 0) return;

  const current = normalize(location.pathname);
  const active = syncActive(navLinks, current) ?? navLinks[0];
  syncActive(overlayLinks, current); // ← これが今回のポイント

  // インジケーター位置（今までどおり active 基準）
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
};

update(false);
document.fonts.ready.then(() => update(false));
document.addEventListener('astro:page-load', () => update(true));
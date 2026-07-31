const header = () => document.querySelector<HTMLElement>('.header');
const button = () => document.querySelector<HTMLButtonElement>('.header__hamburger');
const overlay = () => document.querySelector<HTMLElement>('.header__overlay');

const setOpen = (open: boolean) => {
  const btn = button();
  const panel = overlay();
  const root = header();
  if (!btn || !panel || !root) return;

  root.classList.toggle('is-menu-open', open);
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  panel.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('is-menu-open', open);
};

const toggle = () => {
  const btn = button();
  if (!btn) return;
  setOpen(btn.getAttribute('aria-expanded') !== 'true');
};

const bind = () => {
  const btn = button();
  const panel = overlay();
  if (!btn || !panel) return;

  btn.addEventListener('click', toggle);

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
};

bind();
setOpen(false);
document.addEventListener('astro:page-load', () => setOpen(false));
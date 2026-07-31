const MIN_MS = 3000;
const FLAG = 'site-loaded';

const hasLoaded = () => sessionStorage.getItem(FLAG) === '1';

const markLoaded = () => {
  sessionStorage.setItem(FLAG, '1');
  document.documentElement.classList.add('is-loaded');
};

const suppress = () => {
  markLoaded();
  document.querySelectorAll<HTMLElement>('.loading').forEach((el) => {
    el.style.display = 'none';
    el.setAttribute('hidden', '');
  });
};

const hide = (el: HTMLElement) => {
  el.classList.add('is-hidden');
  markLoaded();
  window.setTimeout(() => {
    el.setAttribute('hidden', '');
  }, 600);
};

const start = () => {
  const el = document.querySelector<HTMLElement>('.loading');
  if (!el) return;

  if (hasLoaded()) {
    suppress();
    return;
  }

  const started = performance.now();
  const finish = () => {
    const wait = Math.max(0, MIN_MS - (performance.now() - started));
    window.setTimeout(() => hide(el), wait);
  };

  if (document.readyState === 'complete') finish();
  else window.addEventListener('load', finish, { once: true });
};

start();
document.addEventListener('astro:after-swap', () => {
  if (hasLoaded()) suppress();
});
document.addEventListener('astro:page-load', () => {
  if (hasLoaded()) suppress();
});


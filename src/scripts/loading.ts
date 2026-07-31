const MIN_MS = 3000;
const MORPH_MS = 800;
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
  document.querySelector<HTMLElement>('[data-hero-logo]')?.classList.remove('is-waiting');
};

const finishLoading = (el: HTMLElement) => {
  markLoaded();
  el.classList.add('is-hidden');
  window.setTimeout(() => {
    el.setAttribute('hidden', '');
    el.style.display = 'none';
  }, 400);
};

const morphLogoThenHide = (loadingRoot: HTMLElement) => {
  const from = loadingRoot.querySelector<HTMLElement>('[data-loading-logo]');
  const to = document.querySelector<HTMLElement>('[data-hero-logo]');

  // ヒーローがないページは普通にフェード
  if (!from || !to) {
    finishLoading(loadingRoot);
    return;
  }

  to.classList.add('is-waiting');

  const fromRect = from.getBoundingClientRect();
  const toRect = to.getBoundingClientRect();

  // ロゴを画面座標で固定
  from.style.position = 'fixed';
  from.style.top = `${fromRect.top}px`;
  from.style.left = `${fromRect.left}px`;
  from.style.width = `${fromRect.width}px`;
  from.style.height = `${fromRect.height}px`;
  from.style.margin = '0';
  from.style.zIndex = '10000';
  from.style.transformOrigin = 'top left';
  from.style.transition = `transform ${MORPH_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`;

  // 背景・文字・バーだけ先に消す
  loadingRoot.classList.add('is-bg-out');

  const dx = toRect.left - fromRect.left;
  const dy = toRect.top - fromRect.top;
  const scale = toRect.height / fromRect.height;

  requestAnimationFrame(() => {
    from.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
  });

  window.setTimeout(() => {
    to.classList.remove('is-waiting');
    finishLoading(loadingRoot);
  }, MORPH_MS);
};

const start = () => {
  const el = document.querySelector<HTMLElement>('.loading');
  if (!el) return;

  if (hasLoaded()) {
    suppress();
    return;
  }

  // 初回：ヒーローラゴを隠しておく
  document.querySelector<HTMLElement>('[data-hero-logo]')?.classList.add('is-waiting');

  const started = performance.now();
  const finish = () => {
    const wait = Math.max(0, MIN_MS - (performance.now() - started));
    window.setTimeout(() => morphLogoThenHide(el), wait);
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
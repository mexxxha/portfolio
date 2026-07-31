const MIN_MS = 2000;

const hide = () => {
  const el = document.querySelector<HTMLElement>('.loading');
  if (!el || el.classList.contains('is-hidden')) return;

  el.classList.add('is-hidden');
  document.documentElement.classList.add('is-loaded');

  window.setTimeout(() => {
    el.setAttribute('hidden', '');
  }, 600); // CSS transition と揃える
};

const start = () => {
  const el = document.querySelector<HTMLElement>('.loading');
  if (!el) return;

  // 遷移戻りで残っていたら出さない
  if (document.documentElement.classList.contains('is-loaded')) {
    el.setAttribute('hidden', '');
    return;
  }

  const started = performance.now();

  const finish = () => {
    const wait = Math.max(0, MIN_MS - (performance.now() - started));
    window.setTimeout(hide, wait);
  };

  if (document.readyState === 'complete') {
    finish();
  } else {
    window.addEventListener('load', finish, { once: true });
  }
};

start();
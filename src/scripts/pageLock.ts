const reasons = new Set<'loading' | 'menu'>();

const setInert = (element: Element | null, inert: boolean) => {
  if (!element) return;
  if (inert) element.setAttribute('inert', '');
  else element.removeAttribute('inert');
};

export const setPageLock = (reason: 'loading' | 'menu', locked: boolean) => {
  if (locked) reasons.add(reason);
  else reasons.delete(reason);

  const loading = reasons.has('loading');
  const menu = reasons.has('menu');

  setInert(document.querySelector('header'), loading);
  document.querySelectorAll('main, footer, .scroll__ruler').forEach((element) => {
    setInert(element, loading || menu);
  });
};

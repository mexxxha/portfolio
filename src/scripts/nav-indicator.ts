const nav = document.querySelector<HTMLElement>('.header__nav');
const indicator = document.querySelector<HTMLElement>('.header__nav_indicator');
const links = document.querySelectorAll<HTMLAnchorElement>('.header__nav_link');

if (!nav || !indicator || links.length === 0) {

} else {
  let active = links[0];

  const moveIndicator = (link: HTMLAnchorElement, animation = true) => {
    if (!animation) {
      indicator.style.transition = 'none';
    }

    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const left = linkRect.left - navRect.left;
    const top = linkRect.top - navRect.top;

    indicator.style.width = `${linkRect.width}px`;
    indicator.style.height = `${linkRect.height}px`;
    indicator.style.transform = `translate(${left}px, ${top}px)`;

    if (!animation) {
      indicator.offsetHeight;
      indicator.style.transition = '';
    }

    links.forEach((l) => l.classList.remove('is-active'));
    link.classList.add('is-active');
    active = link;
  };

  moveIndicator(active, false);

  links.forEach((link) => {
    link.addEventListener('click', () => {
      moveIndicator(link);
    });
  });

  document.fonts.ready.then(() => {
    moveIndicator(active, false);
  });

  window.addEventListener('resize', () => {
    moveIndicator(active, false);
  });
}


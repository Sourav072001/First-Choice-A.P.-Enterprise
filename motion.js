(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const body = document.body;

  if (!reduceMotion) {
    body.classList.add('motion-enter');
    requestAnimationFrame(() => body.classList.add('motion-enter-active'));
  }

  const targets = document.querySelectorAll('main > section, main > section .reveal, footer.footer, .admin-title, .admin-panel');
  const isAdminPage = document.body.classList.contains('admin-body');
  targets.forEach((element, index) => {
    element.classList.add('motion-reveal');
    element.classList.add('depth-reveal');
    if (isAdminPage) element.classList.add('depth-visible', 'motion-visible');
    element.style.setProperty('--motion-x', `${index % 2 ? 24 : -24}px`);
    element.style.setProperty('--motion-tilt', `${index % 2 ? -1 : 1}deg`);
  });

  if (!isAdminPage) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('depth-visible', entry.isIntersecting);
        entry.target.classList.toggle('motion-visible', entry.isIntersecting);
      });
    }, { threshold: 0.14, rootMargin: '-8% 0px -8% 0px' });
    targets.forEach(element => observer.observe(element));
  } else {
    targets.forEach(element => element.classList.add('motion-visible'));
  }

  document.querySelectorAll('.project-card, .admin-project, .button, .header-cta').forEach(element => {
    element.addEventListener('click', () => {
      element.classList.remove('depth-click');
      requestAnimationFrame(() => element.classList.add('depth-click'));
    });
  });

  if (!reduceMotion) {
    document.querySelectorAll('a[href]').forEach(link => {
      const url = new URL(link.href, window.location.href);
      const isInternalPage = url.origin === window.location.origin && url.pathname !== window.location.pathname && !link.target && !link.hasAttribute('download');
      if (!isInternalPage) return;
      link.addEventListener('click', event => {
        if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        body.classList.add('page-exit');
        window.setTimeout(() => { window.location.href = url.href; }, 280);
      });
    });
  }
})();

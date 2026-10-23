(function(){const PANEL_DURATION_MS = 350;

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function setExpanded(item, expanded, { animate = true } = {}) {
    const trigger = item.querySelector('.faq-item__trigger');
    const panel = item.querySelector('.faq-item__panel');
    if (!trigger || !panel) return;

    item.dataset.animating = 'false';
    item.classList.remove('is-closing');

    if (!animate || prefersReducedMotion()) {
      item.dataset.expanded = expanded ? 'true' : 'false';
      trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      return;
    }

    if (expanded) {
      item.classList.remove('is-closing');
      if (item.dataset.expanded === 'true') return;

      requestAnimationFrame(() => {
        item.dataset.expanded = 'true';
        trigger.setAttribute('aria-expanded', 'true');
      });
      return;
    }

    item.dataset.animating = 'true';
    item.classList.add('is-closing');

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      panel.removeEventListener('transitionend', onEnd);
      clearTimeout(fallback);
      item.dataset.expanded = 'false';
      trigger.setAttribute('aria-expanded', 'false');
      item.classList.remove('is-closing');
      item.dataset.animating = 'false';
    };

    const onEnd = (event) => {
      if (event.target !== panel || event.propertyName !== 'grid-template-rows') return;
      finish();
    };

    const fallback = setTimeout(finish, PANEL_DURATION_MS + 50);
    panel.addEventListener('transitionend', onEnd);

    requestAnimationFrame(() => {
      panel.getBoundingClientRect();
    });
  }

  function initFaqAccordion() {
    document.querySelectorAll('.faq-item:not([data-faq-init])').forEach((item) => {
      item.dataset.faqInit = 'true';

      const trigger = item.querySelector('.faq-item__trigger');
      if (!trigger) return;

      trigger.addEventListener('click', () => {
        if (item.dataset.animating === 'true') return;

        const isOpen = item.dataset.expanded === 'true';
        const list = item.closest('.faq__list');

        if (!isOpen) {
          list?.querySelectorAll('.faq-item[data-expanded="true"]').forEach((openItem) => {
            if (openItem !== item) setExpanded(openItem, false);
          });
          setExpanded(item, true);
          return;
        }

        setExpanded(item, false);
      });
    });
  }

  initFaqAccordion();
  document.addEventListener('astro:page-load', initFaqAccordion);
})();
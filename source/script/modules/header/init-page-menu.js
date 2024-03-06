export function initialSandwichMenu() {
  const BODY_DATA_ATTRIBUTE = 'data-scroll';
  const MENU_ITEMS_APPEARANCE_DELAY = 150;
  const IS_ACTIVE_CLASS = 'is-active';
  const IS_MENU_CLASS = 'is-menu';

  const body = document.body;
  const sandwich = body.querySelector('[data-sandwich="data-sandwich"]');
  const mainNav = body.querySelector('[data-main-nav="nav"]');
  const logo = body.querySelector('[data-header-logo="data-header-logo"]');
  const navItem = mainNav.querySelectorAll('[data-nav-item="item"]');

  navItem.forEach((item, index) => {
    const delay = index * MENU_ITEMS_APPEARANCE_DELAY;
    item.style.transitionDelay = delay + 'ms';
  })

  function getScrollWidth() {
    const div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
  }

  function toggleScroll() {
    if (body.dataset.scroll === '1') {
      body.classList.add('scroll-lock');
      body.dataset.scroll = '0';
      body.style.paddingRight = `${scrollWidth}px`;
      body.style.top = '0px';
    } else {
      body.classList.remove('scroll-lock');
      body.dataset.scroll = '1';
      body.removeAttribute('style');
    }
  }

  function toggleAttribute(element, attributeName, value, anotherValue) {
    const toggledValue = element.getAttribute(attributeName) === value ? anotherValue : value;
    element.setAttribute(attributeName, toggledValue);
  }

  function toggleMenuDisplay() {
    toggleScroll();
    toggleAttribute(sandwich, 'aria-pressed', 'true', 'false');
    mainNav.classList.toggle(IS_ACTIVE_CLASS);
    sandwich.classList.toggle(IS_ACTIVE_CLASS);
    logo.classList.toggle(IS_MENU_CLASS);
  }

  if (!body.hasAttribute(BODY_DATA_ATTRIBUTE)) {
    body.setAttribute(BODY_DATA_ATTRIBUTE, '1');
  }

  const scrollWidth = getScrollWidth();

  sandwich?.addEventListener('click', toggleMenuDisplay);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && mainNav.classList.contains(IS_ACTIVE_CLASS)) {
      toggleMenuDisplay();
    }
  });

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      if (window.innerWidth >= 1024 && mainNav.classList.contains(IS_ACTIVE_CLASS)) {
        toggleMenuDisplay();
      }
    }
  });

  resizeObserver.observe(body);
}

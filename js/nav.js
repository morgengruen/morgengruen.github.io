const primaryNav = document.querySelector('.nav');
const navToggle = document.querySelector('.mobile-menu-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
  }
})

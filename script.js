const menuButton = document.querySelector('.menu-button');
const menuPanel = document.querySelector('.menu-panel');
const closeButton = document.querySelector('.menu-close');

function setMenuOpen(isOpen) {
    menuPanel.classList.toggle('is-open', isOpen);
    menuPanel.closest('.rand').classList.toggle('menu-open', isOpen);
    menuPanel.setAttribute('aria-hidden', String(!isOpen));
    menuPanel.inert = !isOpen;
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.dataset.i18nAriaLabel = isOpen ? 'closeMenu' : 'openMenu';
    if (window.applySiteLanguage) window.applySiteLanguage();
}

menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

closeButton.addEventListener('click', () => setMenuOpen(false));

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
});

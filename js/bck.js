document.addEventListener('DOMContentLoaded', function () {
    const parallax = document.querySelector('.parallax');
    const overlay = document.querySelector('.parallax-overlay');
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

    if (parallax) {
        parallax.style.backgroundPositionY = `${scrollY * 0.6}px`;
        }

    if (overlay) {
        const opacity = Math.min(scrollY / 220, 1);
        overlay.style.opacity = opacity;
        }
    });
});
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


// Add this JavaScript to your file
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const mobileMenu = document.querySelector('.navbar__menu');
    let lastScrollTop = 0;
    const navbarHeight = navbar.offsetHeight;
    const mobileBreakpoint = 960; // Match your CSS breakpoint

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Only apply this behavior on mobile screens
        if (window.innerWidth <= mobileBreakpoint) {
            if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
                // Scroll down - hide navbar
                navbar.style.top = `-${navbarHeight}px`;
                // Also close the mobile menu if open
                mobileMenu.classList.remove('active');
            } else {
                // Scroll up - show navbar
                navbar.style.top = '0';
            }
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Make sure navbar is visible when menu is toggled
    const menuToggle = document.querySelector('.navbar__toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navbar.style.top = '0';
        });
    }
});
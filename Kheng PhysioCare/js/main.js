document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const header = document.querySelector('.header');

    mobileNavToggle.addEventListener('click', function () {
        header.classList.toggle('nav-open');
    });

    // Add 'active' class to current page's nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
//loader animation
window.addEventListener('load', function() {
    const loader = document.getElementById('loader-wrapper');
    const content = this.document.getElementById('main-content');

    // Wait 500ms after load, then fade out loader and show content
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            content.style.display = 'block';
        }, 2000); // match fade duration
    }, 200); // delay after load
});

//content animations and functions
document.addEventListener('DOMContentLoaded', function() {
    //navbar functions
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');


    //navbar scroll and hide funcs
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (window.scrollY <= 50) {
            navbar.classList.remove('hidden');
        } else if (window.scrollY > lastScrollY) {
            navbar.classList.add('hidden');
        }
        lastScrollY = window.scrollY;
    });

    //small (mobile) screen nav
    if(menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    //make mobile menu close
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
});
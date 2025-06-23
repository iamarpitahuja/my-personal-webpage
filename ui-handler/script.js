
// Loader functionality
window.addEventListener('load', function () {
    const loader = document.getElementById('loader-wrapper');
    const content = document.getElementById('main-content');
    
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
    if (menuToggle && navLinks) {
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

    //tag interaction
    const techTags = document.querySelectorAll('.tech-tag');
    
    techTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const techName = this.getAttribute('data-tech');
            console.log(`Clicked on ${techName}`); //test log remove later
            
            // Add a subtle pulse effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            }, 100);
        });
        
        // Add keyboard accessibility
        tag.setAttribute('tabindex', '0');
        tag.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    //scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    //animated elements handler
    const animatedElements = document.querySelectorAll('.text-content, .image-section, .tech-tag, .project-card');
    animatedElements.forEach(el => observer.observe(el));
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    //intro section transition
    const heroSection = document.getElementById('intro-header');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }

    // Project cards stagger animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

//utility functions
function toggleMenu() {
    const navLinks = document.querySelectorAll('.nav-links');
    if(navLinks) {
        navLinks.classList.toggle('active');
    }
}

//load states for href links
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log(`Opening external link: ${this.href}`);
        });
    });
});

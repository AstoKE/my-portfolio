/**
 * Terminal-Inspired Portfolio JavaScript
 * Handles navigation, theme toggle, and interactions
 */

(function() {
    'use strict';

    // ============================================
    // Theme Toggle System
    // ============================================
    
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const themeStorageKey = 'portfolio-theme';
    
    function getSavedTheme() {
        const savedTheme = localStorage.getItem(themeStorageKey);
        if (savedTheme === 'dark' || savedTheme === 'light') {
            return savedTheme;
        }
        return 'dark'; // Default to dark
    }
    
    function applyTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem(themeStorageKey, theme);
        updateThemeIcon(theme);
    }
    
    function updateThemeIcon(theme) {
        if (themeToggle) {
            const icon = themeToggle.querySelector('.theme-icon');
            if (icon) {
                icon.textContent = theme === 'dark' ? '[light]' : '[dark]';
            }
        }
    }
    
    // Initialize theme
    const currentTheme = getSavedTheme();
    applyTheme(currentTheme);
    
    // Theme toggle handler
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

    // ============================================
    // Mobile Navigation Toggle
    // ============================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        });
    });

    document.addEventListener('click', function (event) {
        const isClickInsideNav =
        navMenu.contains(event.target) || navToggle.contains(event.target);

        if (!isClickInsideNav && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        }
    });
    }


    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // ============================================
    // Smooth Scrolling for Anchor Links
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Navbar Background on Scroll
    // ============================================
    
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.borderBottomColor = 'var(--border-color)';
        }
    });

    // ============================================
    // Active Navigation Link Highlighting
    // ============================================
    
    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = Array.from(document.querySelectorAll('.nav-link'));

    function highlightActiveSection() {
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    window.addEventListener('load', highlightActiveSection);

    console.log('Terminal portfolio loaded successfully');

})();

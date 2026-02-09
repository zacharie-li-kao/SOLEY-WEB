/**
 * SOLEY Suite — Navigation
 * Scroll spy for sidebar active state.
 * Mobile menu toggle.
 */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
        var sections = [];
        var menuToggle = document.querySelector('.menu-toggle');
        var sidebar = document.querySelector('.sidebar');
        var overlay = document.querySelector('.sidebar-overlay');

        // Collect section targets
        navLinks.forEach(function (link) {
            var id = link.getAttribute('href').slice(1);
            var el = document.getElementById(id);
            if (el) sections.push({ id: id, el: el, link: link });
        });

        // Scroll spy
        function updateActive() {
            var scrollY = window.scrollY + 120;

            var active = null;
            for (var i = sections.length - 1; i >= 0; i--) {
                if (sections[i].el.offsetTop <= scrollY) {
                    active = sections[i];
                    break;
                }
            }

            navLinks.forEach(function (l) { l.classList.remove('active'); });
            if (active) active.link.classList.add('active');
        }

        window.addEventListener('scroll', updateActive, { passive: true });
        updateActive();

        // Smooth scroll on click
        navLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                var id = this.getAttribute('href').slice(1);
                var target = document.getElementById(id);
                if (target) {
                    var offset = window.innerWidth <= 1024 ? 70 : 20;
                    window.scrollTo({
                        top: target.offsetTop - offset,
                        behavior: 'smooth'
                    });
                    history.replaceState(null, '', '#' + id);
                }
                // Close mobile menu
                closeMobile();
            });
        });

        // Mobile menu
        function openMobile() {
            sidebar.classList.add('open');
            overlay.classList.add('visible');
            document.body.style.overflow = 'hidden';
        }

        function closeMobile() {
            sidebar.classList.remove('open');
            overlay.classList.remove('visible');
            document.body.style.overflow = '';
        }

        if (menuToggle) {
            menuToggle.addEventListener('click', function () {
                if (sidebar.classList.contains('open')) {
                    closeMobile();
                } else {
                    openMobile();
                }
            });
        }

        if (overlay) {
            overlay.addEventListener('click', closeMobile);
        }

        // Close on Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMobile();
        });
    });
})();

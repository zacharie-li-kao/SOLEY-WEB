/**
 * SOLEY Suite — Theme Toggle
 * Persists preference in localStorage.
 * Default: always light unless user explicitly switched.
 */
(function () {
    'use strict';

    var STORAGE_KEY = 'soley-theme';

    function getPreferred() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'dark' || stored === 'light') return stored;
        return 'light';
    }

    function apply(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);

        // Update button labels
        var buttons = document.querySelectorAll('.theme-toggle');
        buttons.forEach(function (btn) {
            var label = btn.querySelector('.theme-label');
            if (label) {
                label.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
            }
        });
    }

    function toggle() {
        var current = document.documentElement.getAttribute('data-theme') || 'light';
        apply(current === 'dark' ? 'light' : 'dark');
    }

    // Apply on load (before paint)
    apply(getPreferred());

    // Bind toggle buttons after DOM ready
    document.addEventListener('DOMContentLoaded', function () {
        var buttons = document.querySelectorAll('.theme-toggle');
        buttons.forEach(function (btn) {
            btn.addEventListener('click', toggle);
        });
    });
})();

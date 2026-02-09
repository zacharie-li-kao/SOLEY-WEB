/**
 * SOLEY Suite — Email Signup
 * Submits email to Google Apps Script endpoint.
 */
(function () {
    'use strict';

    var ENDPOINT = 'https://script.google.com/macros/s/AKfycby1uyJpxP03lsfEPEKjzkXFtymClP5gcnt7m5xfozkVuB0f-4rg4IwklpSI8G0ACgpd3g/exec';

    document.addEventListener('DOMContentLoaded', function () {
        var forms = document.querySelectorAll('.signup-form');

        forms.forEach(function (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                var input = form.querySelector('input[type="email"]');
                var btn = form.querySelector('button[type="submit"]');
                var msg = form.nextElementSibling;
                var email = input.value.trim();

                if (!email) return;

                // Disable while submitting
                input.disabled = true;
                btn.disabled = true;
                btn.textContent = 'Sending...';

                fetch(ENDPOINT, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: 'email=' + encodeURIComponent(email)
                })
                .then(function () {
                    // no-cors means we can't read the response,
                    // but if it didn't throw, assume success
                    if (msg) {
                        msg.textContent = 'Thank you. We will be in touch.';
                        msg.className = 'signup-message success';
                    }
                    input.value = '';
                    input.disabled = false;
                    btn.disabled = false;
                    btn.textContent = 'Notify me';
                })
                .catch(function () {
                    if (msg) {
                        msg.textContent = 'Something went wrong. Please try again.';
                        msg.className = 'signup-message error';
                    }
                    input.disabled = false;
                    btn.disabled = false;
                    btn.textContent = 'Notify me';
                });
            });
        });
    });
})();

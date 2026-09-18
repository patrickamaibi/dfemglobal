/**
 * D'Kingsfems Global Ltd — Coming Soon Logic
 * Lightweight, zero-dependency, vanilla ES6+
 */

(function () {
  'use strict';

  /* ==========================================================================
     Client Configuration
     ========================================================================== */
  const CONFIG = {
    // Target Launch Date: YYYY-MM-DDTHH:mm:ss
    targetLaunchDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString(),
    
    // Set to false to hide the countdown section
    enableCountdown: true,

    // Formspree Form ID: Replace with client ID e.g. "https://formspree.io/f/xvovnzyq"
    // Leave blank or as placeholder to use safe local storage fallback
    formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  };

  /* ==========================================================================
     Countdown Timer
     ========================================================================== */
  function initCountdown() {
    const countdownSection = document.getElementById('countdownSection');
    if (!CONFIG.enableCountdown || !countdownSection) {
      if (countdownSection) countdownSection.style.display = 'none';
      return;
    }

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const targetTime = new Date(CONFIG.targetLaunchDate).getTime();

    function updateTimer() {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        clearInterval(timerInterval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
  }

  /* ==========================================================================
     Email Lead Capture Form
     ========================================================================== */
  function initSignupForm() {
    const form = document.getElementById('signupForm');
    const emailInput = document.getElementById('emailInput');
    const submitBtn = document.getElementById('submitBtn');
    const feedback = document.getElementById('formFeedback');

    if (!form || !emailInput || !submitBtn || !feedback) return;

    function showFeedback(message, type) {
      feedback.textContent = message;
      feedback.className = `form-feedback ${type}`;
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (!isValidEmail(email)) {
        showFeedback('Please enter a valid email address.', 'error');
        emailInput.focus();
        return;
      }

      // Button loading state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="width: 14px; height: 14px; animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"></circle>
          <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
        <span>Submitting...</span>
      `;

      // Always save to localStorage as a safeguard for client reviews & handoff
      try {
        const savedSignups = JSON.parse(localStorage.getItem('dkingsfems_signups') || '[]');
        savedSignups.push({ email, timestamp: new Date().toISOString() });
        localStorage.setItem('dkingsfems_signups', JSON.stringify(savedSignups));
      } catch (err) {
        console.warn('LocalStorage unavailable for lead backup', err);
      }

      // Check if real Formspree endpoint is configured
      const isConfigured = CONFIG.formEndpoint && !CONFIG.formEndpoint.includes('YOUR_FORM_ID');

      if (isConfigured) {
        try {
          const response = await fetch(CONFIG.formEndpoint, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });

          if (response.ok) {
            showSuccess();
          } else {
            showFeedback('Something went wrong. Please try again or reach us via email.', 'error');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }
        } catch (error) {
          showFeedback('Network error. Your email was saved locally; please connect via email.', 'error');
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      } else {
        // Simulated network response for development / demo mode
        setTimeout(() => {
          showSuccess();
        }, 600);
      }

      function showSuccess() {
        showFeedback('✓ Thank you. You are on our private priority list. We will notify you upon launch.', 'success');
        emailInput.value = '';
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>✓ Subscribed</span>`;
      }
    });
  }

  /* ==========================================================================
     Dynamic Year in Footer
     ========================================================================== */
  function initDynamicYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /* Initialize on DOM Ready */
  document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initSignupForm();
    initDynamicYear();
  });
})();

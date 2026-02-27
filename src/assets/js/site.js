const toggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

reveals.forEach((el) => observer.observe(el));

const leadForms = document.querySelectorAll('form[data-lead-form="true"]');
leadForms.forEach((formEl) => {
  formEl.addEventListener('submit', () => {
    const formName = formEl.getAttribute('name') || 'lead_form';
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'quote_form_submit', form_name: formName });
    }
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: formName
      });
    }
  });
});

if (window.location.pathname === '/thank-you/' || window.location.pathname === '/thank-you/index.html') {
  if (window.dataLayer) {
    window.dataLayer.push({ event: 'quote_thank_you_view' });
  }
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      event_category: 'lead',
      event_label: 'quote_thank_you_view'
    });
  }
}

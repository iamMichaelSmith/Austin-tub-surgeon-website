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

const photoInput = document.querySelector('#projectPhotos');
const previewCard = document.querySelector('#uploadPreview');
const previewSummary = document.querySelector('#uploadPreviewSummary');

async function compressImageFile(file, maxWidth = 1600, quality = 0.82) {
  if (!file.type.startsWith('image/')) return file;

  const imageBitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxWidth / imageBitmap.width);
  const targetWidth = Math.round(imageBitmap.width * scale);
  const targetHeight = Math.round(imageBitmap.height * scale);

  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageBitmap, 0, 0, targetWidth, targetHeight);

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', quality));
  if (!blob) return file;

  const fileName = file.name.replace(/\.[^.]+$/, '') + '.jpg';
  return new File([blob], fileName, { type: 'image/jpeg', lastModified: Date.now() });
}

if (photoInput) {
  photoInput.addEventListener('change', async () => {
    const files = Array.from(photoInput.files || []).slice(0, 5);
    if (!files.length) return;

    if (previewCard && previewSummary) {
      previewCard.style.display = 'block';
      previewSummary.textContent = 'Optimizing photos for faster upload...';
    }

    let originalBytes = 0;
    let optimizedBytes = 0;
    const outputFiles = [];

    for (const file of files) {
      originalBytes += file.size;
      try {
        const optimized = await compressImageFile(file);
        optimizedBytes += optimized.size;
        outputFiles.push(optimized);
      } catch {
        optimizedBytes += file.size;
        outputFiles.push(file);
      }
    }

    const transfer = new DataTransfer();
    outputFiles.forEach((f) => transfer.items.add(f));
    photoInput.files = transfer.files;

    if (previewCard && previewSummary) {
      const savedPct = originalBytes > 0 ? Math.max(0, Math.round((1 - optimizedBytes / originalBytes) * 100)) : 0;
      const toMb = (n) => (n / (1024 * 1024)).toFixed(2);
      previewSummary.textContent = `Optimized ${outputFiles.length} photo(s): ${toMb(originalBytes)}MB -> ${toMb(optimizedBytes)}MB (${savedPct}% smaller).`;
    }
  });
}

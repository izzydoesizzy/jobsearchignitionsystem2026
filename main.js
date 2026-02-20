/* ============================================================
   FAQ Accordion
   ============================================================ */
document.querySelectorAll('.faq-question').forEach(function(button) {
  button.addEventListener('click', function() {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    var answer = this.nextElementSibling;

    // Collapse all
    document.querySelectorAll('.faq-question').forEach(function(btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.nextElementSibling.hidden = true;
    });

    // Open this one if it was closed
    if (!expanded) {
      this.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
    }
  });
});

/* ============================================================
   LinkedIn Before/After — Comparison Sliders + Carousel
   ============================================================ */

// --- Comparison slider drag logic ---
function initComparisonSlider(container) {
  var afterEl = container.querySelector('.cs-after');
  var handleEl = container.querySelector('.cs-handle');
  if (!afterEl || !handleEl) return;

  var dragging = false;

  function setPosition(pct) {
    // Clamp 0–100 (full range)
    pct = Math.min(100, Math.max(0, pct));
    afterEl.style.clipPath = 'inset(0 0 0 ' + pct + '%)';
    handleEl.style.left = pct + '%';
  }

  // Default to 50%
  setPosition(50);

  function getPercent(clientX) {
    var rect = container.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }

  // Mouse events
  container.addEventListener('mousedown', function(e) {
    dragging = true;
    setPosition(getPercent(e.clientX));
    e.preventDefault();
  });

  document.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    setPosition(getPercent(e.clientX));
  });

  document.addEventListener('mouseup', function() {
    dragging = false;
  });

  // Touch events
  container.addEventListener('touchstart', function(e) {
    dragging = true;
    setPosition(getPercent(e.touches[0].clientX));
  }, { passive: true });

  container.addEventListener('touchmove', function(e) {
    if (!dragging) return;
    setPosition(getPercent(e.touches[0].clientX));
    e.preventDefault();
  }, { passive: false });

  container.addEventListener('touchend', function() {
    dragging = false;
  });
}

// Init all comparison sliders on the page
document.querySelectorAll('[data-comparison]').forEach(function(slider) {
  initComparisonSlider(slider);
});

// --- Carousel navigation ---
var slides = document.querySelectorAll('.ba-slide');
var dots = document.querySelectorAll('.ba-dot');
var currentSlide = 0;

function goToSlide(index) {
  // Wrap around
  index = (index + slides.length) % slides.length;

  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = index;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');

  // Re-init the comparison slider for this slide (ensures position is set)
  var slider = slides[currentSlide].querySelector('[data-comparison]');
  if (slider) {
    initComparisonSlider(slider);
  }
}

var prevBtn = document.querySelector('.ba-prev');
var nextBtn = document.querySelector('.ba-next');

if (prevBtn) prevBtn.addEventListener('click', function() { goToSlide(currentSlide - 1); });
if (nextBtn) nextBtn.addEventListener('click', function() { goToSlide(currentSlide + 1); });

dots.forEach(function(dot) {
  dot.addEventListener('click', function() {
    goToSlide(parseInt(this.dataset.dot, 10));
  });
});

/* ============================================================
   Testimonial Carousel — auto-scroll + lightbox
   ============================================================ */

(function() {
  var tCarousel = document.getElementById('testimonialCarousel');
  var tWrapper = document.querySelector('.t-carousel-wrapper');
  if (!tCarousel || !tWrapper) return;

  var ITEM_WIDTH = 296; // 280px card + 16px gap
  var tCurrentOffset = 0;
  var tAutoTimer = null;

  function tGetMaxOffset() {
    var visible = Math.max(1, Math.floor(tWrapper.offsetWidth / ITEM_WIDTH));
    var totalItems = tCarousel.querySelectorAll('.t-item').length;
    return Math.max(0, (totalItems - visible) * ITEM_WIDTH);
  }

  function tScroll() {
    var maxOffset = tGetMaxOffset();
    tCurrentOffset += ITEM_WIDTH;
    if (tCurrentOffset > maxOffset) {
      // Snap back to start without animation
      tCarousel.style.transition = 'none';
      tCurrentOffset = 0;
      tCarousel.style.transform = 'translateX(0)';
      void tCarousel.offsetWidth; // force reflow
      return;
    }
    tCarousel.style.transition = 'transform 0.6s ease';
    tCarousel.style.transform = 'translateX(' + (-tCurrentOffset) + 'px)';
  }

  function startAuto() { tAutoTimer = setInterval(tScroll, 3500); }
  function stopAuto()  { clearInterval(tAutoTimer); }

  startAuto();
  tWrapper.addEventListener('mouseenter', stopAuto);
  tWrapper.addEventListener('mouseleave', startAuto);

  // Lightbox
  var lightbox    = document.getElementById('lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('.lightbox-img') : null;
  var lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  tCarousel.querySelectorAll('.t-item').forEach(function(item) {
    item.addEventListener('click', function() {
      var img = this.querySelector('.t-img');
      if (img) openLightbox(img.src, img.alt);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();

/* ============================================================
   Sticky Bottom Bar — show on scroll, dismiss via localStorage
   ============================================================ */

(function() {
  var bar   = document.getElementById('stickyBar');
  var close = document.getElementById('stickyBarClose');
  if (!bar) return;

  // Don't show if already dismissed
  if (localStorage.getItem('barDismissed')) {
    bar.style.display = 'none';
    return;
  }

  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  }, { passive: true });

  if (close) {
    close.addEventListener('click', function() {
      bar.style.display = 'none';
      localStorage.setItem('barDismissed', '1');
    });
  }
})();

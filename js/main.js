const THEME_KEY = 'devbakery-theme';

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = saved || preferred;
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btns = document.querySelectorAll('.btn-theme');
  btns.forEach(btn => {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Modo claro' : 'Modo escuro');
  });
}

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
}

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const update = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function setActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === path || (path === '' && href === 'index.html'));
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

function showModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(id);
  }, { once: true });
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => {
      closeModal(m.id);
    });
  }
});

function initCustomInputs() {
  document.querySelectorAll('.radio-option').forEach(option => {
    const input = option.querySelector('input[type="radio"]');
    if (!input) return;

    const updateGroup = () => {
      const name = input.name;
      document.querySelectorAll(`.radio-option input[name="${name}"]`).forEach(r => {
        r.closest('.radio-option').classList.toggle('selected', r.checked);
      });
    };

    option.addEventListener('click', () => {
      input.checked = true;
      input.dispatchEvent(new Event('change', { bubbles: true }));
      updateGroup();
    });

    input.addEventListener('change', updateGroup);
  });

  document.querySelectorAll('.checkbox-option').forEach(option => {
    const input = option.querySelector('input[type="checkbox"]');
    if (!input) return;

    option.addEventListener('click', () => {
      input.checked = !input.checked;
      option.classList.toggle('checked', input.checked);
    });

    option.classList.toggle('checked', input.checked);
  });

  document.querySelectorAll('.toggle-wrap').forEach(wrap => {
    const input = wrap.querySelector('input[type="checkbox"]');
    if (!input) return;

    wrap.addEventListener('click', e => {
      if (e.target.tagName === 'A') return;
      input.checked = !input.checked;
    });
  });
}

function initForms() {
  document.querySelectorAll('form[data-modal]').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const btn = form.querySelector('.btn-submit');
      const modalId = form.getAttribute('data-modal');

      if (btn) {
        btn.classList.add('loading');
        btn.textContent = 'Enviando...';
      }

      await new Promise(r => setTimeout(r, 1200));

      if (btn) {
        btn.classList.remove('loading');
        btn.innerHTML = btn.getAttribute('data-original-text') || 'Enviar';
      }

      showModal(modalId);
      form.reset();

      form.querySelectorAll('.radio-option').forEach(o => o.classList.remove('selected'));
      form.querySelectorAll('.checkbox-option').forEach(o => o.classList.remove('checked'));
    });
  });

  document.querySelectorAll('.btn-submit').forEach(btn => {
    btn.setAttribute('data-original-text', btn.innerHTML);
  });
}

function animateCounters() {
  document.querySelectorAll('.stat-number[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        const timer = setInterval(() => {
          start = Math.min(start + step, target);
          el.textContent = Math.floor(start) + suffix;
          if (start >= target) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.5 });

    observer.observe(el);
  });
}

function showToast(msg, type = 'info') {
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

function initMasks() {
  const cepInput = document.getElementById('cep');
  if (cepInput) {
    cepInput.addEventListener('input', e => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 8);
      if (v.length > 5) v = v.substring(0, 5) + '-' + v.substring(5);
      e.target.value = v;
    });
  }

  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    input.addEventListener('input', e => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 11);
      if (v.length > 6) v = '(' + v.substring(0, 2) + ') ' + v.substring(2, 7) + '-' + v.substring(7);
      else if (v.length > 2) v = '(' + v.substring(0, 2) + ') ' + v.substring(2);
      e.target.value = v;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initNavbarScroll();
  setActiveNavLink();
  initScrollReveal();
  initCustomInputs();
  initForms();
  animateCounters();
  initMasks();

  document.querySelectorAll('.btn-theme').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
});

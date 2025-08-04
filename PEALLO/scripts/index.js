// ===== MENU RESPONSIVE =====
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  links.classList.toggle('show');
  toggle.classList.toggle('open');
});

// Cierra si se hace click afuera
document.addEventListener('click', (e) => {
  if (!links.contains(e.target) && !toggle.contains(e.target)) {
    links.classList.remove('show');
    toggle.classList.remove('open');
  }
});

// Cierra al escoger enlace
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('show');
    toggle.classList.remove('open');
  });
});

// ===== SCROLL SUAVE PARA "CONOCER MÁS" =====
const btnHero = document.querySelector('.cta-hero');
if (btnHero) {
  btnHero.addEventListener('click', () => {
    const target = document.querySelector('#servicios');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// ===== EFECTO PARALLAX LIGERO EN HERO IMAGE =====
const heroImg = document.querySelector(".hero-image img");
if (heroImg) {
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 80;
    const y = (window.innerHeight / 2 - e.pageY) / 80;
    heroImg.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
  });
  document.addEventListener("mouseleave", () => {
    heroImg.style.transform = "translate(0,0) scale(1)";
  });
}

// ===== FORMULARIO DE CONTACTO SIMULADO =====
const form = document.querySelector('.contact-form');
const status = document.querySelector('.form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validación básica
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const msg = form.querySelector('#mensaje').value.trim();

    if (!name || !email || !msg) {
      status.textContent = 'Por favor llena todos los campos.'; 
      status.style.color = '#ff6b6b';
      return;
    }

    // Simular envío
    status.textContent = 'Enviando...';
    status.style.color = '#ffffff';

    setTimeout(() => {
      status.textContent = 'Mensaje enviado con éxito. Te contactaremos pronto.';
      status.style.color = '#4affff';
      form.reset();
    }, 1200);
  });
}

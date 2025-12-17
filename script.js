// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Smooth anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = a.getAttribute('href');
    if (target && target.length > 1) {
      e.preventDefault();
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (!mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden');
    }
  });
});

// Intersection Observer reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i * 80) + 'ms';
  io.observe(el);
});

// Theme toggle (Dark/Light mode)
const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

// Load saved theme
if (localStorage.theme === "light") {
  html.classList.remove("dark");
  sunIcon.classList.remove("hidden");
  moonIcon.classList.add("hidden");
} else {
  html.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");

  if (isDark) {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    localStorage.theme = "dark";
  } else {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
    localStorage.theme = "light";
  }
});


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Activer l’animation de la ligne centrale
  const line = document.querySelector('.timeline-line');
  const lineObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) line.classList.add("active");
    }, 
    { threshold: 0.1 }
  );
  lineObserver.observe(line);

  const glow = document.querySelector('.mouse-glow');

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

if (window.innerWidth < 768) {
  glow.style.display = 'none';
}



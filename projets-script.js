// Animation d'apparition progressive des cartes de projets
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card, index) => {
    // Ajouter un délai d'animation progressif
    card.style.transitionDelay = `${index * 100}ms`;
    
    // Observer pour l'animation au scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    observer.observe(card);
  });
});

const glow = document.querySelector('.mouse-glow');

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

if (window.innerWidth < 768) {
  glow.style.display = 'none';
}

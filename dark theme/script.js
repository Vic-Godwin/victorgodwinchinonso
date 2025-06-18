// === Scroll Progress Bar ===
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = `${scrolled}%`;
  });
  
  // === Section Fade + Slide Reveal ===
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('show');
      } else {
        el.classList.remove('show');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  // === Dynamic Typing Effect ===
  const phrases = ['Engineer.', 'Dreamer.', 'Builder.', 'Problem Solver.','Creating A Dent In The Universe.'];
  let i = 0,
    j = 0,
    currentPhrase = [],
    isDeleting = false,
    isEnd = false;
  
  const typeLoop = () => {
    const typing = document.getElementById('typing');
  
    isEnd = false;
    typing.innerHTML = currentPhrase.join('');
  
    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        typing.innerHTML = currentPhrase.join('');
      }
  
      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop();
        j--;
        typing.innerHTML = currentPhrase.join('');
      }
  
      if (j === phrases[i].length) {
        isEnd = true;
        isDeleting = true;
      }
  
      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) i = 0;
      }
    }
  
    const speed = isEnd ? 1000 : isDeleting ? 50 : 150;
    setTimeout(typeLoop, speed);
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('typing')) {
      typeLoop();
    }
  });
  
  // === Floating Particles ===
  const createParticles = () => {
    const particleCount = 25;
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.zIndex = '0';
    particleContainer.style.overflow = 'hidden';
    particleContainer.style.pointerEvents = 'none';
  
    document.body.appendChild(particleContainer);
  
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('span');
      particle.style.position = 'absolute';
      particle.style.width = '6px';
      particle.style.height = '6px';
      particle.style.borderRadius = '50%';
      particle.style.background = 'rgba(255,0,102,0.5)';
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animation = `float ${3 + Math.random() * 3}s ease-in-out infinite`;
  
      particleContainer.appendChild(particle);
    }
  };
  
  document.addEventListener('DOMContentLoaded', createParticles);
  
  // === Contact Form Feedback ===
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! I’ll get back to you ASAP 🚀');
        form.reset();
      });
    }
  });
  
// ✅ WhatsApp Button Popup (Optional - You already have a direct link in HTML)
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const url = link.href;
      window.open(url, "_blank");
    });
  });
  
  // ✅ Scroll Reveal Animation
  const reveals = document.querySelectorAll(".project-card, .section-title, .contact-form, .social-links");
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
  
  // ✅ Optional: Add success feedback after form submit
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", () => {
    setTimeout(() => {
      alert("✅ Your message has been sent successfully!");
    }, 1000); // Adjust delay if needed
  });
  


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
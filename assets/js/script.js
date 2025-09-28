// Smooth scroll (accounts for sticky header)
(function () {
    const links = document.querySelectorAll('.header_menu a[href^="#"]');
    function headerOffset() {
      const h = document.querySelector('.header-top');
      return h ? h.offsetHeight + 12 : 20;
    }
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        const target = document.querySelector(id);
        if (!target) return;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset();
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  })();
  
  // Typing effect with caret (looping)
  (function () {
    const element = document.getElementById('typing');
    if (!element) return;
  
    const messages = [
      "I’m Hanna — an IT student who enjoys writing, design, and exploring how technology integrates into everyday life.",
      "Fast learner; eager to apply new knowledge.",
      "Passionate about creativity, writing and continuous growth."
    ];
    let msgI = 0, charI = 0, deleting = false;
  
    function tick() {
      const msg = messages[msgI];
      if (!deleting) {
        element.textContent = msg.slice(0, charI++);
        if (charI > msg.length) {
          deleting = true;
          setTimeout(tick, 1200);
          return;
        }
      } else {
        element.textContent = msg.slice(0, charI--);
        if (charI < 0) {
          deleting = false;
          msgI = (msgI + 1) % messages.length;
        }
      }
      setTimeout(tick, deleting ? 40 : 70);
    }
    tick();
  })();
  
  // Fade-in on scroll (IntersectionObserver)
  (function () {
    const nodes = document.querySelectorAll('.fade-in');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(n => n.classList.add('visible'));
      return;
    }
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    nodes.forEach(n => obs.observe(n));
  })();
  
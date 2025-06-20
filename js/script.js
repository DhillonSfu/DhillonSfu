// JavaScript file - currently empty
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add('fade-out'); // start hidden
    observer.observe(section);
  });
});

// Typewriter effect for tagline
const text = "Designing . Developing . Delivering";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("tagline").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;

// Scroll reveal animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Highlight current nav
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-button a");
  const currentFile = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentFile) {
      link.classList.add("active");
    }
  });
});


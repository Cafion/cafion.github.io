/* =========================================
   NAVBAR SCROLL BEHAVIOR + ANIMATION
   ========================================= */

// Fade + slide on page load
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("nav.navbar");
    navbar.classList.add("fade-slide-down");

    setTimeout(() => {
        navbar.classList.add("show");
    }, 50);
});

// Transparent → blurred → solid navbar on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav.navbar");
    if (window.scrollY > 60) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

// Automatically highlight active page link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".navbar .nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const elements = document.querySelectorAll('.slide-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, options);

elements.forEach((element) => {
  observer.observe(element);
});
// scripts.js
const animations = document.querySelectorAll('.slide-in[data-animation="slide-in"]');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, options);

animations.forEach((animation) => {
  observer.observe(animation);
});

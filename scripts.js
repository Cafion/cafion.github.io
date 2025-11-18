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
/* ======================================================
   CAFION — Animation Add-On JS (Safe / Non-Breaking)
   Paste at the bottom of scripts.js
   ====================================================== */

/* PAGE FADE-IN */
window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});

/* NAVBAR SHOW/HIDE ON SCROLL */
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const currentY = window.scrollY;

    if (currentY > lastScrollY && currentY > 80) {
        navbar.classList.add("nav-hidden");
    } else {
        navbar.classList.remove("nav-hidden");
    }

    lastScrollY = currentY;
});

/* REVEAL ELEMENTS ON SCROLL */
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".reveal-element").forEach((el) => {
    revealObserver.observe(el);
});

/* FEATURE BOX SLIDE-IN */
const featureObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll(".feature-box-wrapper").forEach((box) => {
    featureObserver.observe(box);
});

/* 3D CARD TILT */
document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y - rect.height / 2) / rect.height) * 10;
        const rotateY = ((x - rect.width / 2) / rect.width) * -10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

/* BUTTON RIPPLE EFFECT */
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;

    const ripple = document.createElement("span");
    const size = Math.max(btn.clientWidth, btn.clientHeight);
    ripple.classList.add("ripple");

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.offsetX - size / 2 + "px";
    ripple.style.top = e.offsetY - size / 2 + "px";

    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});

/* CART BADGE PULSE */
window.addEventListener("cafion-cart-updated", () => {
    const badge = document.getElementById("cartBadge");
    if (!badge) return;

    badge.classList.remove("cart-pulse");
    void badge.offsetWidth;
    badge.classList.add("cart-pulse");
});

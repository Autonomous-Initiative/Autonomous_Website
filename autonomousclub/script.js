// VANTA background
window.addEventListener("DOMContentLoaded", () => {
  if (window.VANTA && VANTA.WAVES) {
    VANTA.WAVES({
      el: "#tsparticles",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      shininess: 21.0,
      waveHeight: 34.5,
      waveSpeed: 0.4,
      zoom: 0.65
    });
  }

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".header-nav");
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after clicking a link (nice on phones)
    nav.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => nav.classList.remove("active"))
    );
  }
});

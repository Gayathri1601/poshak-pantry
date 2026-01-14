document.addEventListener("DOMContentLoaded", () => {

  /* Page transition */
  document.querySelectorAll(".transition-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.add("fade-exit-active");
      setTimeout(() => {
        window.location.href = link.getAttribute("href");
      }, 500);
    });
  });

  /* Hamburger menu */
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menu.classList.toggle("open");
    });
  }
});

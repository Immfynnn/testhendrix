// 🔹 Page load: overlay fades out after 2s, then content fades in
window.addEventListener("load", () => {
  const overlay = document.getElementById("loading-overlay");
  const content = document.getElementById("page-content");

  setTimeout(() => {
    overlay.classList.add("fade-out");
    setTimeout(() => {
      content.classList.add("fade-in");
    }, 700); // wait for overlay fade (2s)
  }, 800); // overlay stays visible for 2s before fade
});

// 🔹 Navigation: overlay shows, fades out after 2s, then content fades out 1s, then navigate
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a:not(.toggle-btn)");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const overlay = document.getElementById("loading-overlay");
      const content = document.getElementById("page-content");
      const target = link.getAttribute("href");

      // Reset overlay to visible
      overlay.classList.remove("fade-out");
      overlay.style.opacity = "1";

      // After 2s, fade overlay out
      setTimeout(() => {
        overlay.classList.add("fade-out");

        // Then fade content out over 1s
        setTimeout(() => {
          content.classList.add("fade-out");

          // After content fade, navigate
          setTimeout(() => {
            window.location.href = target;
          }, 400); // wait for content fade (1s)
        }, 600); // wait for overlay fade (2s)
      }, 600); // overlay visible for 2s before fade
    });
  });
});

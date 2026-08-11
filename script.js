(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = [...document.querySelectorAll("main section[id]")];
  const year = document.querySelector("#year");

  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    nav?.classList.remove("open");
    menuButton?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
  };

  menuButton?.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open);
    menuButton.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  links.forEach(link => link.addEventListener("click", closeMenu));

  document.addEventListener("click", e => {
    if (nav?.classList.contains("open") && !nav.contains(e.target) && !menuButton.contains(e.target)) {
      closeMenu();
    }
  });

  // Highlight the current section in the header.
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

  sections.forEach(section => observer.observe(section));

  // Lightweight reveal animation; content remains visible if JS is unavailable.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // Close the mobile menu when the user presses Escape.
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });
})();

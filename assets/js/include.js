document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll('[data-include]');

  includes.forEach(el => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then(response => response.text())
      .then(data => {
        el.innerHTML = data;

        const mobileNavbar = new MobileNavbar(
          ".mobile-menu",
          ".nav-list",
          ".nav-list li"
        );
        mobileNavbar.init();

        const links = el.querySelectorAll("nav a[href]");
        links.forEach(link => {
          const href = link.getAttribute("href");
          if (
            href &&
            !href.startsWith("http") &&
            !href.startsWith("#") &&
            !href.startsWith("/")
          ) {
            const base = window.location.pathname.includes("/pages/")
              ? "../"
              : "./";
            link.setAttribute("href", base + href);
          }
        });
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll('[data-include]');

  includes.forEach(el => {
    const file = el.getAttribute("data-include");

    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ao carregar ${file}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;

        const mobileNavbar = new MobileNavbar(
          ".mobile-menu",
          ".nav-list",
          ".nav-list li"
        );
        mobileNavbar.init();
      })
      .catch(error => {
        console.error("Erro ao incluir HTML:", error);
        el.innerHTML = `<p style="color:red;">Erro ao carregar componente: ${file}</p>`;
      });
  });
});

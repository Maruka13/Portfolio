class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const includeElements = document.querySelectorAll('[data-include]');
  
    includeElements.forEach(el => {
      const file = el.getAttribute("data-include");
      if (file) {
        fetch(file)
          .then(response => response.text())
          .then(data => {
            el.innerHTML = data;
  
            // 🔥 Após injetar o HTML, marcar o link ativo
            const links = el.querySelectorAll('a[data-link]');
            const currentPath = window.location.pathname;
  
            links.forEach(link => {
              if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
              }
            });
  
            // Reativar o menu mobile (caso esteja dentro da navbar)
            const mobileNav = new MobileNavbar(
              ".mobile-menu",
              ".nav-list",
              ".nav-list li"
            );
            mobileNav.init();
          })
          .catch(err => console.error("Erro ao carregar o include:", err));
      }
    });
  });
  
  
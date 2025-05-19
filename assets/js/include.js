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

              //switcher
              const langBtn = document.getElementById('lang-btn');
              const langOptions = document.getElementById('lang-options');
              const flagIcon = document.querySelector('.lang-button .flag-icon');
              const languageSwitcher = document.querySelector('.language-switcher');
              const tooltip = document.querySelector('.tooltip');

              if (langBtn && langOptions && flagIcon && languageSwitcher && tooltip) {
                  langBtn.addEventListener('click', (event) => {
                      langOptions.classList.toggle('open');
                      event.stopPropagation();
                  });

                  langOptions.querySelectorAll('button[data-lang]').forEach(button => {
                      button.addEventListener('click', () => {
                          const selectedLang = button.getAttribute('data-lang');
                          langOptions.classList.remove('open');

                          if (selectedLang === 'pt') {
                              flagIcon.src = '../assets/img/brasil.jpg';
                              flagIcon.alt = 'Brasil';
                          } else if (selectedLang === 'en') {
                              flagIcon.src = '../assets/img/EUA.png';
                              flagIcon.alt = 'Estados Unidos';
                          }

                          //trocar idioma
                          console.log('Idioma selecionado:', selectedLang);
                      });
                  });

                  document.addEventListener('click', () => {
                      langOptions.classList.remove('open');
                  });

                  languageSwitcher.addEventListener('mouseenter', () => {
                      if (!langOptions.classList.contains('open')) {
                          tooltip.style.opacity = '1';
                          tooltip.style.visibility = 'visible';
                      }
                  });

                  languageSwitcher.addEventListener('mouseleave', () => {
                      tooltip.style.opacity = '0';
                      tooltip.style.visibility = 'hidden';
                  });

                  langBtn.addEventListener('mouseenter', () => {
                      if (!langOptions.classList.contains('open')) {
                          tooltip.style.opacity = '1';
                          tooltip.style.visibility = 'visible';
                      }
                  });

                  langBtn.addEventListener('mouseleave', () => {
                      tooltip.style.opacity = '0';
                      tooltip.style.visibility = 'hidden';
                  });
              }
              
          });
  });
});

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
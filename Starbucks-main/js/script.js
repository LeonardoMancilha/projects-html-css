class MobileNavbar {
  constructor(menuButton, menuWrapper, menuLinks) {
    this.menuButton = document.querySelector(menuButton);
    this.menuWrapper = document.querySelector(menuWrapper);
    this.menuLinks = document.querySelectorAll(menuLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  // Método para lidar com o clique no botão
  handleClick() {
    // Alterna a classe "active" no menu
    this.menuWrapper.classList.toggle(this.activeClass);
    this.menuButton.classList.toggle(this.activeClass);

    // Remove animações antigas e adiciona novas, garantindo consistência
    this.menuLinks.forEach((link, index) => {
      link.style.animation = link.style.animation
        ? ""
        : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
  }

  // Adiciona o evento de clique no botão do menu
  addClickEvent() {
    this.menuButton.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.menuButton && this.menuWrapper) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".menu_small-device",
  ".menu_wrapper",
  ".menu_wrapper a"
);

mobileNavbar.init();

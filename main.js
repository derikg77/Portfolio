//Menu responsivo
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  // addBlur() {
  //   document.querySelector('.main').style.filter = `blur(4px)` ?
  //   document.querySelector('.main').style.filter = `blur(4px)` :
  //   document.querySelector('.main').style.filter = '';
  // }
  handleClick() {
    // this.addBlur();
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    document.body.style.overflowX != "hidden"
      ? (document.body.style.overflowX = "hidden")
      : (document.body.style.overflowX = "");
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

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

// Texto animado
function typeWrite(element) {
  const textoArray = element.innerHTML.split("");
  element.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      element.innerHTML += letra;
    }, 65 * i);
  });
}
const titulo = document.querySelector(".hello");
const text = document.querySelector(".description");
typeWrite(text);
// typeWrite(titulo);
// function initScrollSuave() {
//   const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
//   function scrollToSection(event) {
//     event.preventDefault();
//     const href = event.currentTarget.getAttribute('href');
//     const section = document.querySelector(href);
//     section.scrollIntoView ({
//       behavior: 'smooth',
//       block: 'start',
//     });
//     // forma alternativa
//     // const topo = section.offsetTop;
//     // window.scrollTo({
//     //   top: topo,
//     //   behavior: 'smooth',
//     // });
//   }
//   linksInternos.forEach((link) => {
//     link.addEventListener('click', scrollToSection);
//   });
// } initScrollSuave();
// const menuSection = document.querySelector(".js-menu");

// function linkClick() {
//   document.body.style.overflow = "initial";
//   if(menuSection.classList.contains("on")) {
//       menuSection.classList.remove("on")
//   }
// }
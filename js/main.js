const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerElement = $("#header");
const headerTranslate = $(".header-translate");
const headerNavbar = $(".header-navbars");
const headerNavbarBtn = $(".header-navbars .header-navbars__btn i");
const headerNavbarLists = $$(".header-navbars .header-navbars__lists li a");
const headerNavbarLogo = $(".header-navbars__logo");
const headerNavbarLogoImg = $(".header-navbars__logo img");

const headerSidebarBtn = $(".header-navbars__btn");
const headerSidebarBtnSearch = $(".header-navbars__btn--search");
const sidebarModal = $(".sidebar-modal");
const sidebarModalBtn = $(".sidebar-modal__head i");
const sidebarModalOverplay = $(".sider-bar__overplay");

const footerElement = $("#footer");
const footerMobileElement = $("#footer-mobile");

// Handle header scroll events
window.addEventListener("scroll", () => {
  let value = this.scrollY;
  if (value === 0) {
    headerElement.style.opacity = "1";
    headerTranslate.style.display = "block";
    headerNavbar.style.backgroundColor = "transparent";
    headerNavbarLogoImg.src =
      "https://vinpearl.com/themes/porto/img/vinpearl/vp.svg";
    headerNavbarBtn.style.color = "#fff";
    headerSidebarBtnSearch.style.color = "#fff";
    headerNavbarLists.forEach((item) => {
      item.style.color = "#fff";
    });
    headerNavbar.style.height =
      "calc(var(--header-height) - var(--translate-height))";
    headerNavbar.style.paddingTop = "0";

    headerNavbar.classList.remove("responsive");
  } else if (value >= 150 && value < 650) {
    headerElement.style.opacity = "0";
  } else if (value >= 600) {
    headerNavbar.classList.add("responsive");

    headerElement.style.opacity = "1";

    headerTranslate.style.display = "none";
    headerNavbar.style.backgroundColor = "#fff";
    headerNavbarLogoImg.src =
      "https://vinpearl.com/themes/porto/images/new-homepage/vp-logo-blue.svg";
    headerNavbarBtn.style.color = "var(--text-color)";
    headerSidebarBtnSearch.style.color = "var(--text-color)";
    headerNavbarLists.forEach((item) => {
      item.style.color = "var(--text-color)";
    });
    headerNavbar.style.height =
      "calc(var(--header-height) - var(--translate-height) + 10px)";
    headerNavbar.style.paddingTop = "2rem";
  }
});

// Handle click open sidebar modal
headerSidebarBtn.addEventListener("click", () => {
  sidebarModal.classList.add("open");
  sidebarModalOverplay.classList.add("open");
});

sidebarModalBtn.addEventListener("click", () => {
  sidebarModal.classList.remove("open");
  sidebarModalOverplay.classList.remove("open");
});

sidebarModalOverplay.addEventListener("click", () => {
  sidebarModal.classList.remove("open");
  sidebarModalOverplay.classList.remove("open");
});

// handle change footer mobile when innerwidth < 740px
window.addEventListener("resize", () => {
  if (window.innerWidth < 740) {
    footerElement.style.display = "none";
    footerMobileElement.style.display = "block";
  } else {
    footerElement.style.display = "block";
    footerMobileElement.style.display = "none";
  }
});

// ================= changeing theme =============

const themeBtn = document.querySelector("#theme-btn");
const mbThemeBtn = document.querySelector("#mobile-theme");
themeBtn.addEventListener("click", handleTheme);
mbThemeBtn.addEventListener("click", handleTheme);
function handleTheme() {
  const root = getComputedStyle(document.querySelector(":root"));
  if (root.getPropertyValue("--bg-light") == "white") {
    document.documentElement.style.cssText =
      "--bg-light: rgb(23, 23, 23); --text-primary: white; --text-theme:rgb(40, 40, 40);";
    this.innerHTML = `<ion-icon name="sunny-outline"></ion-icon>`;
    this.classList.add("sun");
  } else {
    document.documentElement.style.cssText =
      "--bg-light: white; --text-primary: black; --text-theme:#e8e8e8;";
    this.innerHTML = `<ion-icon name="moon"></ion-icon
    >`;
    this.classList.remove("sun");
  }
}
// ============ adding style in navigation bar ========

const navItems = document.querySelectorAll(".nav li");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", function (event) {
    navItems.forEach((item) => {
      item.classList.remove("nav-active");
      if (event.target.className == "md hydrated") {
        if (
          event.target.parentElement.parentElement.innerText == item.innerText
        ) {
          item.classList.add("nav-active");
        }
      }
      if (event.target.innerText == item.innerText) {
        item.classList.add("nav-active");
      }
    });
  });
});

// mobile navigation bar
const mbOpenBtn = document.querySelector("#open-btn");
const mbCloseBtn = document.querySelector("#close-btn");
const mbNav = document.querySelector(".mobile-nav-bar");
mbOpenBtn.addEventListener("click", function () {
  mbNav.classList.add("is-open");
});
mbCloseBtn.addEventListener("click", function () {
  mbNav.classList.remove("is-open");
});

// ================= changeing theme =============

const themeBtn = document.querySelector("#theme-btn");
themeBtn.addEventListener("click", function () {
  const root = getComputedStyle(document.querySelector(":root"));
  console.log();
  if (root.getPropertyValue("--bg-light") == "white") {
    document.documentElement.style.cssText =
      "--bg-light: rgb(23, 23, 23); --text-primary: white;";
  } else {
    document.documentElement.style.cssText =
      "--bg-light: white; --text-primary: black;";
  }
});

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

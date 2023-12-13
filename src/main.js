import "./scss/main.scss";

const toggleMenu = document
  .getElementsByClassName("header__btn")[0]
  .addEventListener("click", () => {
    /* const navList = document.getElementsByClassName("nav__list")[0];
    navList.style.display =
      navList.style.display === "none" || navList.style.display === ""
        ? "block"
        : "none"; */
    const navList = document
      .getElementsByClassName("nav__list")[0]
      .classList.toggle("show-menu");
  });

toggleMenu;

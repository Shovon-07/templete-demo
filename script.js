const sideNav = document.querySelector(".side-nav");
const openSideNav = document.querySelector("#openSideNav");
const closeSideNav = document.querySelector("#closeSideNav");
const bodyOverlay = document.querySelector(".body-overlay");

const OpenSideNav = () => {
  sideNav.classList.add("active");
  closeSideNav.classList.add("show");
  bodyOverlay.classList.add("active");
};

const CloseSideNav = () => {
  sideNav.classList.remove("active");
  closeSideNav.classList.remove("show");
  bodyOverlay.classList.remove("active");
};

openSideNav.addEventListener("click", OpenSideNav);
closeSideNav.addEventListener("click", CloseSideNav);
bodyOverlay.addEventListener("click", CloseSideNav);

const mobileNavigation = document.querySelector(".mobile-nav");
const mobileNavigationChildren = document.querySelectorAll(".list-item");
const openMenu = document.querySelector(".hamburger-bar");
const closeMenu = document.querySelector(".close-bar");

openMenu.addEventListener("click", () =>
{
    mobileNavigation.classList.add("navbar-active");
})

closeMenu.addEventListener("click", () =>
{
    mobileNavigation.classList.remove("navbar-active");
})

mobileNavigationChildren.forEach((child) =>
{
    child.addEventListener("click", () =>
    {
        mobileNavigation.classList.remove("navbar-active");
    });
});
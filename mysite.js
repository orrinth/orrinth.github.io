const projects = document.querySelectorAll(".project");
const siteLinks = document.querySelectorAll(".site-links")
const allProjects = Array.from(projects);
const allSiteLinks = Array.from(siteLinks);

function showButtons() {
    this.style.boxShadow = "none";
    this.style.transition = "box-shadow 0.5s ease-out";
}

function unshowButtons() {
    this.style.boxShadow = "0 5px 20px black";
    this.style.transition = "box-shadow 0.5s ease-out";
}

for (const project of allProjects) {
    project.addEventListener("mouseover", showButtons);
    project.addEventListener("mouseout", unshowButtons);
}

const navLinks = document.querySelector("nav ul");
const burger = document.querySelector(".burger");
let burgerClicked = false;

burger.onclick = function() {
    if (!burgerClicked) {
        navLinks.style.animation = "navLinksFadeIn 0.5s ease-in forwards";
        burgerClicked = true;
    } else {
        navLinks.style.animation = "navLinksFadeOut 0.5s ease-in";
        burgerClicked = false;
    }
};
const header = document.getElementsByClassName("page-header")[0];
const desktopNav = document.querySelector("#desktop-navigation > ul").children;
const sections = [
    document.querySelector("#section-start"),
    document.querySelector("#section-games"),
    document.querySelector("#section-about"),
];

window.addEventListener("scroll", () => {
    // Header background
    if (document.documentElement.scrollTop > 50) {
        header.classList.add("page-header-scrolling");
    } else {
        header.classList.remove("page-header-scrolling");
    }

    // Navigation
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 250) {
            current = section.getAttribute("id");
        }
    });

    for (li of desktopNav) {
        li.classList.remove("nav-active");
        if (li.dataset.section == current) {
            console.log(li);
            li.classList.add("nav-active");
        }
    }
});

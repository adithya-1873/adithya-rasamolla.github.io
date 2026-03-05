
const sidebarToggle = document.getElementById("sidebar-active");
const navLinks = document.querySelectorAll(".links-container a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            sidebarToggle.checked = false;
        }
    });
});
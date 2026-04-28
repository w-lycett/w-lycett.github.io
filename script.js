function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.style.background = "#fff";
        navbar.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

function searchPage() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll(".searchable");
    for (let item of items) {
        if (item.innerText.toLowerCase(). includes(input)) {
            item.scrollIntoView({ behavior: "smooth", block: "center" });
            break;
        }
    }
}
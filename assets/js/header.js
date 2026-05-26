/* =========================
   MOBILE SIDEBAR
========================= */

const mobileToggle = document.getElementById("mobileToggle");
const mobileSidebar = document.getElementById("mobileSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
        mobileSidebar.classList.add("active");
        sidebarOverlay.classList.add("active");
    });
}

if (closeSidebar) {
    closeSidebar.addEventListener("click", closeMenu);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeMenu);
}

function closeMenu() {
    if (mobileSidebar) mobileSidebar.classList.remove("active");
    if (sidebarOverlay) sidebarOverlay.classList.remove("active");
}

/* =========================
   HEADER SCROLL
========================= */

const header = document.getElementById("mainHeader");

if (header) {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

/* =========================
   HEADER CART COUNT
========================= */

function refreshHeaderCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.innerText = total;
    }
}

window.refreshHeaderCartCount = refreshHeaderCartCount;
refreshHeaderCartCount();
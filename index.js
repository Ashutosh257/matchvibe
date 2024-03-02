

const hamEl = document.getElementById("ham")
const navItemsEl = document.querySelector(".nav-items")

hamEl.addEventListener("click", () => {
    navItemsEl.style.display =  (
        navItemsEl.style.display === "none") || (navItemsEl.style.display === "") 
        ? "flex" : "none"
})
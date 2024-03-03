
const hamEl = document.getElementById("ham")
const navItemsEl = document.querySelector(".nav-items")
const ctaButton = document.getElementById("cta-button")


hamEl.addEventListener("click", () => {
    navItemsEl.style.display =  (
        navItemsEl.style.display === "none") || (navItemsEl.style.display === "") 
        ? "flex" : "none"
})



ctaButton.addEventListener('click', function(e) {
    e.preventDefault()
    const targetElement = document.getElementById("cta-section")

    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    })
})

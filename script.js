const hamb = document.querySelector(".hamb");
const navA = document.querySelector(".nav-a");

hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    navA.classList.toggle("active");
})
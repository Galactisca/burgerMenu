const menuItems = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
burger.addEventListener("click", ()=>{
    menuItems.classList.toggle("open");
})
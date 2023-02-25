let mobileMenu = document.querySelector(".ul_navigation");
let burger = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-rectangle-xmark");

burger.addEventListener("click", function(){
    mobileMenu.classList.add("show");
    burger.style.display = "none";
    xmark.style.display = "block";
})

xmark.addEventListener("click", function(){
    mobileMenu.classList.remove("show");
    xmark.style.display = "none";
    burger.style.display = "block"; 
})
// Sidebar open close js Code
let menuOpenBtn = document.querySelector(".navbar .fa-bars");
let closeOpenBtn = document.querySelector(".navbarlinks .fa-close");
let navLinks = document.querySelector(".navbarlinks");

menuOpenBtn.addEventListener("click", ()=>{
	navLinks.style.right = "0";
});
closeOpenBtn.addEventListener("click", ()=>{
	navLinks.style.right = "-100%";
});


//Navbar Side
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.addEventListener("click", ()=>{
	navLinks.classList.toggle("show1");
});
let jsArrow = document.querySelector(".js-arrow");
jsArrow.addEventListener("click", ()=>{
	navLinks.classList.toggle("show2");
});
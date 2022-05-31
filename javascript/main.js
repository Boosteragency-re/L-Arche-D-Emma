import Prestations from "./Prestations.js";

fetch("../data.json")
.then(response => response.json())
.then(data => {
    let prestations = new Prestations(data)  
    prestations.display();  

});
openNav();
closeNav();

function openNav() {
    document.getElementById("mobile-menu").addEventListener("click", () => {
        let nav = document.getElementById("nav-mobile");
        nav.style.display = "block";
        nav.style.width = "100%";
    })
}

function closeNav() {
    let nav = document.getElementById("nav-mobile");
    document.getElementById("close-btn").addEventListener("click", () => {
        nav.style.display = "none";
        nav.style.width = "0%";
    })
    document.getElementById("mobile-contact").addEventListener("click", () => {
        nav.style.display = "none";
        nav.style.width = "0%";
    })
}

$("#slideshow").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#slideshow").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#slideshow").carousel("prev");
});   

window.addEventListener("load",()=>{


document.body.style.opacity="1";


});



const cards =
document.querySelectorAll(".card");


cards.forEach(card=>{


card.addEventListener(
"mouseenter",
()=>{

card.style.transform=
"translateY(-12px)";

});


card.addEventListener(
"mouseleave",
()=>{

card.style.transform=
"translateY(0)";

});


});
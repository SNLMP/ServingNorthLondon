window.addEventListener("load",()=>{

document.body.style.opacity="1";


/* STAFF IMAGE SYSTEM */

const staffImages = {

    "M. Rainer": "mrainer.png",

    "C. Murray": "cmurray.png",

    "M. Wallace": "mwallace.png",

    "T. Walker": "twalker.png",

    "T. McKenzie": "tmckenzie.png"

};


const cards =
document.querySelectorAll(".card");



cards.forEach(card=>{


let name = card.dataset.name;


let image =
card.querySelector(".profile");



if(staffImages[name]){

image.src =
"../assets/staff/" + staffImages[name];

image.alt =
name;

}



/* HOVER EFFECT */

card.addEventListener(
"mouseenter",
()=>{

card.style.transform =
"translateY(-12px)";

});



card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"translateY(0)";

});


});


});

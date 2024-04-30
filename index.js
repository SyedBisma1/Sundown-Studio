

const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper'),
    smooth: true
});


var elemC = document.querySelector("#elem-container")
var fixd = document.querySelector("#fixd-img")
elemC.addEventListener("mouseenter" , function(){
   fixd.style.display  = "block";
});

elemC.addEventListener("mouseleave" , function(){
    fixd.style.display  = "none";
 });

 var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener( "mouseenter" , function (){
      var image = e.getAttribute("data-image")
      fixd.style.backgroundImage = `url(${image})`
    })
})

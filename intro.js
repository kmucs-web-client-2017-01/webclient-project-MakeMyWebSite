$(document).ready(function(){

$("#bg").hover( function(){$("div").fadeIn(500); $("p").fadeIn(500);},function(){$("div").fadeOut(300); $("p").fadeOut(300);});

jQuery('#bg').hover(function() { 
jQuery("body").css("background-image", "url(night.jpg)"); 
}).mouseleave(function(){
jQuery('body').css("background-image", "url(deepnight.jpg)"); 
});



});
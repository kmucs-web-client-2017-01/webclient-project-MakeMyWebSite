$(document).ready(function(){

$(".venus").mouseenter(function(){

	$("p").animate({left:'40%', top:'17%'}, 1000);
	
	
	
});

$(".venus").mouseleave(function(){

	$("p").animate({left:'5%', top:'80%'});
	
	
});

	
$(".mercury").mouseenter(function(){
	$("p").animate({left:'23%', top:'10%'}, 800);

});

$(".mercury").mouseleave(function(){

	$("p").animate({left:'5%', top:'80%'});
	
});

$(".saturn").mouseenter(function(){
	$("p").animate({left:'18%', top:'50%'}, 800);

});

$(".saturn").mouseleave(function(){
	$("p").animate({left:'5%', top:'80%'});

});

$(".uranus").mouseenter(function(){
	$("p").animate({left:'30%', top:'70%'}, 800);

});

$(".uranus").mouseleave(function(){
	$("p").animate({left:'5%', top:'80%'});

});

$(".neptune").mouseenter(function(){
	$("p").animate({left:'53%', top:'77%'}, 800);

});

$(".neptune").mouseleave(function(){
	$("p").animate({left:'5%', top:'80%'});

});

$(".jupiter").mouseenter(function(){
	$("p").animate({left:'60%', top:'50%'},800);

});

$(".jupiter").mouseleave(function(){
	$("p").animate({left:'5%', top:'80%'});

});


$(".mars").mouseenter(function(){
	$("p").animate({left:'53%', top:'22%'}, 800);

});

$(".mars").mouseleave(function(){
	$("p").animate({left:'5%', top:'80%'});

});
});
$(function() {
	$("#pagetrabalho").css("background-color", "pink"); 
	$("#pagequem").css("background-color", "pink"); 
	$("#pagecontato").css("background-color", "pink"); 

	$("h1").hide().fadeIn(2000);
	$("h2").hide().fadeIn(2000);
	$("#home").hide().fadeIn(2000);
	$("#trabalho").hide().fadeIn(2000);
	$("#perfil").hide().fadeIn(2000);
	$("#dica").hide().fadeIn(2000);
	$("#falar").hide().fadeIn(2000);
	$(".img").hide().fadeIn(2000);
	$(".retrato").hide().fadeIn(2000);
	$(".sobre").hide().fadeIn(2000);
	$(".fale").hide().fadeIn(2000);

	$( ".retrato" ).draggable({ revert: "valid"});
	
	$().fancybox({
  		selector : '[data-fancybox="images"]:visible',
  		thumbs   : {
    		autoStart : true
  		}
	});

});
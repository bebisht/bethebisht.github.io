$(document).ready(function(){

	$("#owl-demo").owlCarousel({

	    navigation : false,
	    dots: false,
	    slideSpeed : 300,
	    paginationSpeed : 400,
	    singleItem:true,
	    autoPlay: 4000, 
	    loop:true,
	    pagination:false

	});
    new WOW().init();
});
$(document).ready(function() {

	$("#owl-demo").owlCarousel({
		 
		      navigation : false,
		      slideSpeed : 1000,
		      paginationSpeed : 400,
		      singleItem:true,
		      autoPlay: true,
		      dots: false,
		      transitionStyle:'fade'
	});
	$("#owl-demo2").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
});
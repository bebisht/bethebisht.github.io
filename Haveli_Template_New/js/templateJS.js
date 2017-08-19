$(document).ready(function(){
	var first = $('.menu-slider ul').find('li:first-child');
	var last = $('.menu-slider ul').find('li:last-child');
	first.clone().appendTo($('.menu-slider ul'));
	last.clone().prependTo($('.menu-slider ul'));
	
	var newf = $('.menu-slider ul').find('li:nth-child(3)');
	var newl = $('.menu-slider ul').find('li:nth-child(5)');
	newf.clone().appendTo($('.menu-slider ul'));
	newl.clone().prependTo($('.menu-slider ul'));
	
	$('.menu-slider ul').find('li:nth-child(4)').addClass('active');
	$('.menu-nav').find('li:nth-child(2)').addClass('active');
	
	$('.menu-slider .slide-revolver').css('margin-left','-66.66%');
	
	var count = 0;
	$('.menu-slider .nav-right').click(function(e){
		e.preventDefault();
		if(count==4)
		{
			$('.menu-slider .slide-revolver').css('margin-left','-33.33%');
			count=0;
			$('.menu-slider ul').find('li').removeClass('active').parent().find('li:nth-child(3)').addClass('active');
		}
		$('.menu-slider .slide-revolver').animate({
			'margin-left':'-=33.33%'
		},'slow');
		$('.menu-slider ul li.active').removeClass('active').next().addClass('active');
		count++;
	});
	$('.menu-slider .nav-left').click(function(e){
		e.preventDefault();
		if(count==-1)
		{
			$('.menu-slider .slide-revolver').css('margin-left','-200%');
			count=4;
			$('.menu-slider ul').find('li').removeClass('active').parent().find('li:nth-child(8)').addClass('active');
		}
		$('.menu-slider .slide-revolver').animate({
			'margin-left':'+=33.33%'
		},'slow');
		$('.menu-slider ul li.active').removeClass('active').prev().addClass('active');
		count--;
	});
	$('.menu-nav a').click(function(e){
		e.preventDefault();
		$('.menu-nav a').parent().removeClass('active');
		$(this).parent().addClass('active');
		var tar = $(this).attr('data-target');
		var index = $(this).parent().index() + 3;
		count =  parseInt($(this).attr('data-count'),10);
		$('.menu-slider .slide-revolver').animate({
			'margin-left':tar+'%'
		},'slow');
		$('.menu-slider ul li.active').removeClass('active').parent().find('li:nth-child('+index+')').addClass('active');
	});
	var aside = $('aside.mobile-menu'); 
	 $(aside).css('right',$(this).width() * -1);
	 $('.header-mobile .menu-dropdown a').click(function(e){
		e.preventDefault();
		if($(aside).hasClass('expand'))
		{
		$('.inner-wrap').animate({ 
			left:0
		 },'slow');
		 $(aside).animate({ 
			right:$(aside).width() * -1
		 },'slow').removeClass('expand');
		}
		else{
		$('.inner-wrap').animate({ 
			left:$(aside).width() * -1
		 },'slow');
		 $(aside).animate({ 
			right:0
		 },'slow').addClass('expand');
		 }
	 });
});
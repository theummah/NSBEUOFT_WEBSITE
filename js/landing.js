$(document).ready(function(){
	
	//display popout panel
	$('.menu_item').on('mouseenter', function(){
		$(this).find('.popout_panel').fadeIn(300);
	});

	//hide popout panel
	$('.menu_item').on('mouseleave', function(){
		$(this).find('.popout_panel').hide();
	});
});
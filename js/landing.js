$(document).ready(function() {
    //animate hand indicating position of nav menu
    handAnimation = setInterval(function(){$('.menu_item:first-child').toggleClass('move_hand');}, 250);

    //
    $('#nav_menu').on('mousenter', function(){
        clearInterval(handAnimation);
    });

	//display popout panel
	$('.menu_item').on('mouseenter', function(){
		$(this).find('.popout_panel').fadeIn(300);
	});

	//hide popout panel
	$('.menu_item').on('mouseleave', function(){
		$(this).find('.popout_panel').hide();
	});
});

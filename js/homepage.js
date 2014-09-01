$(document).ready(function(){

	//calculate side bar height
	var sideBarHeight = $(window).height() - $("#header").outerHeight() - $("#footer").outerHeight();
	$("#sidebar").css("min-height", sideBarHeight);

	//initially highlight the home nav option when page loads
	$("#topnav").find("li").first().addClass("topnav_select");

	$("#topnav").on("click", "li", function(){
		//find navLinks with a class of topnav_select
		var highlighted = $("#topnav").find("li.topnav_select");
		$("#sidebar").find("#" + $(highlighted).data("link")).fadeOut();
		$(highlighted).removeClass("topnav_select");

		$(this).addClass("topnav_select");
		$("#sidebar").find("#" + $(this).data("link")).fadeIn();
	});

});
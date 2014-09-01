$(document).ready(function(){

	$("#navlist").on("click", "li", function(){
		//find navLinks with a class of navlist_select
		$("#navlist").find("li.navlist_select")
			.removeClass("navlist_select");
		$(this).addClass("navlist_select");
	});
});
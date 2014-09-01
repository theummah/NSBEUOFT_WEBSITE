$(document).ready(function(){
	$("#navlist").on("click", "li", function(){
		$("#navlist").find("li").removeClass("navlist_select");
		$(this).addClass("navlist_select");
	});
});
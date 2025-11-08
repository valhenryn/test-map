// jQuery Modal Popups by Black
// http://code.jfbs.net/?showtopic=57
$(document).ready(function () {
	var fadeBackground = $(document.createElement("div"))
			.hide()
			.attr("id", "fade-background"),
		modalWindow = $(document.createElement("div"))
			.hide()
			.attr("id", "modal-location");
	$(document.body).append(fadeBackground, modalWindow);
	$(document).on("click", ".modal-link", function (e) {
		$("#fade-background").css({ opacity: "0.85" }).fadeIn("fast");
		var newContents = $("#" + $(this).data("modal-target")).html();
		$("#modal-location").html(newContents);
		$("#modal-location").fadeIn("fast");
		e.preventDefault();
	});
	$(document).on("click", "#fade-background", function () {
		$("#fade-background").fadeOut("fast");
		$("#modal-location").fadeOut("fast");
	});
	$(document).keypress(function (e) {
		if (e.keyCode == 27) {
			$("#fade-background").fadeOut("fast");
			$("#modal-location").fadeOut("fast");
		}
	});
});

$(".locfaction.high").click(function () {
	$(".area.high").toggleClass("area-active");
});

$(".locfaction.middle").click(function () {
	$(".area.middle").toggleClass("area-active");
});

$(".locfaction.normal").click(function () {
	$(".area.normal").toggleClass("area-active");
});

$(".locfaction.low").click(function () {
	$(".area.low").toggleClass("area-active");
});

$(".tog-city").click(function () {
	$(".location").toggleClass("toggle-hide");
});
$(".tog-dung").click(function () {
	$(".dungeon").toggleClass("toggle-hide");
});
$(".tog-feat").click(function () {
	$(".justmarried-features").toggleClass("toggle-hide");
});

$(".legend-btn").click(function () {
	$(this).toggleClass("tog-btn-off");
});

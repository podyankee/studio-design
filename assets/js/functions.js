$(".toggle_mnu").click(function() {
	$(this).toggleClass("active");
	$(".sandwich").toggleClass("active");

});

$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".text-top").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".text-top").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

$(document).ready(function  () {
	google.maps.event.addDomListener(window, 'load', init);
		
			function init() {
				// Basic options for a simple Google Map
				// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
				var mapOptions = {
					// How zoomed in you want the map to start at (always required)
					zoom: 11,

					// The latitude and longitude to center the map (always required)
					center: new google.maps.LatLng(40.6700, -73.9400), // New York

					// How you would like to style the map.
					// This is where you would paste any style found on Snazzy Maps.
					styles: [{"featureType":"administrative","elementType":"geometry","stylers":[{"saturation":"2"},{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"saturation":"-28"},{"lightness":"-10"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"saturation":"-1"},{"lightness":"-12"}]},{"featureType":"landscape.natural","elementType":"labels.text","stylers":[{"lightness":"-31"}]},{"featureType":"landscape.natural","elementType":"labels.text.fill","stylers":[{"lightness":"-74"}]},{"featureType":"landscape.natural","elementType":"labels.text.stroke","stylers":[{"lightness":"65"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"-15"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"lightness":"0"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"saturation":"0"},{"lightness":"-9"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"lightness":"-14"}]},{"featureType":"road","elementType":"labels","stylers":[{"lightness":"-35"},{"gamma":"1"},{"weight":"1.39"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":"-19"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":"46"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"lightness":"-13"},{"weight":"1.23"},{"invert_lightness":true},{"visibility":"simplified"},{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#adadad"},{"visibility":"on"}]}]
				};

				// Get the HTML DOM element that will contain your map
				// We are using a div with id="map" seen below in the <body>
				var mapElement = document.getElementById('map');

				// Create the Google Map using our element and options defined above
				var map = new google.maps.Map(mapElement, mapOptions);

				// Let's also add a marker while we're at it
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(40.6700, -73.9400),
					map: map,
					title: 'Snazzy!'
				});
			}
});



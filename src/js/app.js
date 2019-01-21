import $ from "jquery";

// Problem: User when clicking on image goes to a dead end
// Solution: Creaqte an overlay with the large image - Lightbox

const overlay = $('<div id="overlay"></div>');
const image = $("<img>");
const caption = $("<p></p>");

// An Image to overlay
overlay.append(image);

// Add Caption to overlay
overlay.append(caption);

// Add overlay
$("body").append(overlay);

// Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
	event.preventDefault();
	const imgLocation = $(this).attr("href");
	// update overlay with the image linked in the link
	image.attr("src", imgLocation);

	const captionText = $(this)
		.children("img")
		.attr("alt");
	caption.text(captionText);

	// Show the
	overlay.show();
});

overlay.click(function() {
	$(this).hide();
});

//Problem: User when clicking on image goes to a dead end
//Solution: Creaqte an overlay with the large image - Lightbox

var _overlay = $('<div id="overlay"></div>');
var _image = $("<img>")
var _caption = $("<p></p>")


//An Image to overlay
_overlay.append(_image);

//Add Caption to overlay
_overlay.append(_caption)

//Add overlay
$("body").append(_overlay);


//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imgLocation = $(this).attr("href");
  //update overlay with the image linked in the link
  _image.attr('src', imgLocation);





var _captionText = $(this).children('img').attr('alt');
_caption.text(_captionText);




  //Show the
  _overlay.show();
});



_overlay.click(function() {
  $(this).hide();
});

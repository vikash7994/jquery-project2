var $overLay =$("<div id = 'overlay'></div>");
$("body").append($overLay); 
var $image = $("<img>");
$overLay.append($image);
var $close = $("<img id = 'closeImage'> ");
$overLay.append($close);
$("#imagegallery a").click(function(Event)
{
    event.preventDefault();
    var imageSource = $(this).attr("href");
$image.attr("src",imageSource);
$close.attr("src", "images/close.jpg");
$overLay.show();
});
$close.click(function(){

    $($overLay).hide();
})
var slide = [{ image: "img/1st_img.jpg"},
{ image: "img/2nd_image.jpg" },
{ image: "img/3rd_image.jpg" }];
for(var i=0; i<slide.length; i++){
    $("#dts").append('<span class="dot" id="'+i+'"></span>');
}
var Index = 0;
currentSlide(Index);
$(".left-side").click(function(){
    currentSlide(Index+=-1);

})
$(".right-side").click(function(){
    currentSlide(Index+=1);

})
$(".dot").click(function(){
    var displaySlide = parseInt($(this).attr("id"));
    currentSlide(displaySlide);
})
function currentSlide(n)
{
    if (n >= slide.length) {
        Index = 0;
        n=0;
      }
      if (n < 0) {
        Index = slide.length-1;
        n = slide.length-1;
      }
    var dott = $(".dot");
    for (var i=0; i<dott.length; i++){
        $(dott).css("background-color","black");
    }
    $("img").attr("src",slide[n].image);
    $(dott[n]).css("background-color","blue");
}


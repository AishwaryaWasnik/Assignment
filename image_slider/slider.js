var slide = [{ image: "img/1st_img.jpg"},
{ image: "img/2nd_image.jpg" },
{ image: "img/3rd_image.jpg" }];
for(var i=0; i<slide.length; i++){
    document.getElementById("dts").innerHTML += '<span class="dot" id="dts" onclick="currentSlide(' + i + ')"></span>';
}
var Index = 0;
currentSlide(Index);
function plusSlides(n) {
  
    currentSlide(Index += n);
  }

  

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
    var dott =document.querySelectorAll('span');
    for (var i=0; i<dott.length; i++){
        dott[i].style.backgroundColor = "black";
    }
    document.slides.src=slide[n].image;
    dott[n].style.backgroundColor="blue";
}
window.onload=currentSlide(0);

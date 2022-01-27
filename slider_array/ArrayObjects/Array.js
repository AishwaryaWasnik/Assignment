var Index = 1;
var slides = document.getElementsByClassName("Slide");
showSlides(Index);

function plusSlides(n) {
  
  showSlides(Index += n);
}
function showSlides(n) {
 debugger;
  var i;
  
  console.log(slides);
  if (n > slides.length) {
    Index = 1;
    n=1;
  }
  if (n <= 0) {
    Index = slides.length;
    n = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[n-1].style.display = "block";
  
}
function Add()
{
  var name= document.getElementById("name").value;
  var designation= document.getElementById("designation").value;
  var description= document.getElementById("description").value;
  document.getElementById("slides").innerHTML+='<div class="Slide"><h1 class="Name">'+name+'</h1><img class="user" src="img/user1.jpeg" alt="img1"><h3 class="Designation">'+designation+'</h3><p>'+description+'</p></div>';
 
  showSlides(slides.length-1);
}

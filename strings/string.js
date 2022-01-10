function check(){
var str1 = document.getElementById("fname");
var str2 = document.getElementById("lname")
var x = document.getElementById("div");
var string1= str1.value;
var string2= str2.value;
x.innerHTML=string1[0].toUpperCase() + string1.slice(1) +" "+string2[0].toUpperCase() + string2.slice(1) ;
}
const toDoItems = document.getElementById("to-do-items"); 
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown",function(event){
    if(event.key === "Enter")
    addListItem();
})
function addListItem(){

    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkBox = document.createElement("i");
    var trashIcon = document.createElement("i");
  
    
    divParent.className = "item";
  
    divParent.innerHTML = '<div>' +input.value+'</div>';



    checkBox.className = "fa-solid fa-square-check";
    checkBox.style.color = "lightgrey";
    checkBox.addEventListener("click", function(){
        checkBox.style.color = "limegreen";
    })
    
    divChild.appendChild(checkBox);
     
    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function(){
        divParent.remove();
       
    })
    trashIcon.onmouseover = function(){
    trashIcon.style.color = "red";
        
    }
    trashIcon.onmouseleave= function(){
        trashIcon.style.color = "darkgray";

    }
    
    divChild.appendChild(trashIcon); //now both checkbox and trashIcon is in divchild 
    divParent.appendChild(divChild);
    toDoItems.appendChild(divParent);
    input.value = ''; // to clear input field

}
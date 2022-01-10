GroceryBudget=20;
IceCream=15;
function cal()
{
    var c =document.getElementById("input").value;
    if(c>=(GroceryBudget+IceCream))
    {
        alert("Grocery + Ice Cream amount left= " + parseInt ( c-(GroceryBudget+IceCream)) );
    }
    else if(c>=GroceryBudget){
        alert("You can Buy Grocery");
    }
    else{
        alert("You can not Buy");
    }
}

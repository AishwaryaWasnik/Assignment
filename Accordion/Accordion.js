$(document).ready(function()
{
    $("h2").click(function(){
        $(this).next().slideToggle(600);
        $(".content").not($(this).next()).slideUp(600);
    }); 
});
 
$(document).ready(function(){
    $("h2").click(function(){
        $(".content").not($(this).next()).slideUp(600);
        $(this).next().clone().appendTo(".tab").show();
        
    })
});

$(window).resize(function(){
    if ($(this).width() < 1024)
    {
        $("h2").css("width","98%");
    

    $("h2").click(function(){
        
        $(this).next().show();
        $(".content").not($(this).next()).slideUp(600);
       
    }); 

    }
    else{
        $("h2").css("width","31.8%");
    }
});


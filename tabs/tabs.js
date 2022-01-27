 $(document).ready(function() {   
    $(".tab_content").hide();
    $(".tab_content:first").show(); //Show first tab content
    $("ul.tabs li:first").addClass("active");
    
    $("ul.tabs li").click(function() {
        index = $(this).index();
    $("ul.tabs li").removeClass("active"); 
    $(this).addClass("active"); //Add "active" class to selected tab
    $(".tab_content").hide(); //Hide all tab content
    $(".tab_content").eq(index).show();
    });
    });
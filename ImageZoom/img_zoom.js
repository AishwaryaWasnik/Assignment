$(document).ready(function(){
    $(".bag_img").click(function(){
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
    });
    $(".zoom-in").click(function(){
      var imgSize = $(".zoom-img").width();
      if(imgSize<1900)
      imgSize+=100;
      $(".zoom-img").width(imgSize);
      $(".zoom-img").height(imgSize);
    });
    $(".zoom-out").click(function(){
        var imgSize = $(".zoom-img").width();
        if(imgSize>760)
        imgSize-=100;
        $(".zoom-img").width(imgSize);
        $(".zoom-img").height(imgSize);
      });
});
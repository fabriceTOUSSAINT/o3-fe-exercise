$(window).on("load resize",function(e) {

  var menuToggle = $("#navigation-mobile-menu").unbind();
  $("#navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $("#navigation-menu").slideToggle(function(){
      if($("#navigation-menu").is(":hidden")) {
        $("#navigation-menu").removeAttr("style");
      }
    });
  });

  $(".sub-story img").on("click", function(e){
    var sizeReplace = this.src.slice(0,-11).concat("800x390.jpg");
    $(".main-story img").attr("src", sizeReplace);
  });

});

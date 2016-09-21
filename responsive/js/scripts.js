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

  var returnHero = function(){
    var btn = document.createElement("BUTTON");
    var txt = document.createTextNode("Return to original Hero");
    btn.id = "heroBtn";
    btn.className = "hide";
    btn.appendChild(txt);
    var hero = document.getElementById('hero');
    hero.appendChild(btn);
    var heroSrc = $('.main-story img').attr('src');

    return heroSrc
  }

var getHeroSrc = returnHero();


  $(".sub-story img").on("click", function(e){
    //locate dash index, and increment to have begining of image name
    // by this concept, all images must include a dash before its size as they do here
    var indexToDash = this.srcset.lastIndexOf('-') + 1;
    var heroSize = "800x390.jpg";
    var thumbSize = this.srcset.slice(indexToDash, this.srcset.length);
    var sizeReplace = this.srcset.slice(0,indexToDash).concat(heroSize);
    $(".main-story img").attr("src", sizeReplace);
    $("#heroBtn").removeClass("hide");

  });

  $("#heroBtn").on("click", function(e){
    $(".main-story img").attr("src", getHeroSrc);
  });

});

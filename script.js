$(document).ready(function() {


      let goToTop = $("#btnGoToTop");

      $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            goToTop.css("display", "block");
        } else {
            goToTop.css("display", "none");
        }
    });

    goToTop.click(function() {
        $("html, body").animate({ scrollTop: 0 }, 'normal')
    });



  // appendig input:search field after click on 'loop' icon
      $(".fa-search").click(function(event) {
        event.preventDefault();

        let searchBar = $(this).parent().find("#searchBar");

        if (searchBar.length) {
            searchBar.remove();
        } else {
            searchBar = $('<input type="search" id="searchBar">');
            $(this).parent().append(searchBar);
        }
    });


    $(window).scroll(function() {
      var position = $("#about").offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (position < scroll + windowHeight) {
          $("#about").css({
              "transform": "translateY(0)",
              "opacity": "1"
          });
      }
  });

  $(window).trigger('scroll');

    $(window).scroll(function() {
      var position = $("#topCategories").offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (position < scroll + windowHeight) {
          $("#topCategories").css({
              "transform": "translateY(0)",
              "opacity": "1"
          });
      }
  });


    var services = $("#services");
    var servicesChildren = services.find(".animalServices");
    var animated = false;

    $(window).scroll(function() {
        var position = services.offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if (position < scroll + windowHeight && !animated) {
            servicesChildren.each(function(index) {
                var delay = index * 300;
                var element = $(this);
                setTimeout(function() {
                    element.css({
                        "left": "0",
                        "opacity": "1"
                    });
                }, delay);
            });
            animated = true;
        }
    });

    
    $(window).trigger('scroll');


    $(".animalCard").click(function() {
      $(".animalCard").removeClass("clicked active",);
      $(this).addClass("clicked");
    });

        // creating slider 
    const slider = $(".slider");
    const prevButton = $(".pro-prev");
    const nextButton = $(".pro-next");
      
    let position = 0;
      
    prevButton.click(function() {
      if (position > 0) {
          position -= 1;
            updateSliderPosition();
          }
      });
      
    nextButton.click(function() {
      if (position < slider.children().length - 3) {
          position += 1;
            updateSliderPosition();
          }
      });
      
    function updateSliderPosition() {
        slider.css("transform", `translateX(-${position * 90}px)`);
      }
   
})
    

        


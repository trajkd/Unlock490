(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

})(jQuery); // End of use strict

function footer() {
  if (window.screen.height > ($(".container").height() + 119.2)) {
    $(".identity").css("position", "absolute");
    $(".identity").css("bottom", "60px");
    $(".identity").css("margin-left", "-60px");
    $("body").css("margin", "0");
  }
  else {
    $(".identity").css("position", "relative");
    $(".identity").css("bottom", "0");
    $(".identity").css("margin-left", "0");
    $("body").css("margin", "0 0 54.2px 0");
  }
}

footer();
$(window).resize(footer);

function scaleCalendar() {
  if (window.innerWidth < 700) {
    let perpx = 0.90/600;
    let ratio = perpx * window.innerWidth;
    $("#calendar-iframe").css('transform','scale('+ratio+')');
  }
  else {
    $("#calendar-iframe").css('transform','scale(1)');
  }
}

$(window).resize(scaleCalendar);

function scaleTutorial() {
  if (window.innerWidth > 360) {
    let perpx = 0.90 - (0.1*(window.innerWidth - 360)/50);
    // if (window.innerWidth > 380) {
    //   let perpx = 0.8/window.innerWidth;
    // }
    // if (window.innerWidth > 400) {
    //   let perpx = 0.7/window.innerWidth;
    // }
    // if (window.innerWidth > 420) {
    //   let perpx = 0.6/window.innerWidth;
    // }
    // if (window.innerWidth > 440) {
    //   let perpx = 0.4/window.innerWidth;
    // }
    // if (window.innerWidth > 460) {
    //   let perpx = 0.2/window.innerWidth;
    // }
    // if (window.innerWidth > 480) {
    //   let perpx = 0.1/window.innerWidth;
    // }
    // if (window.innerWidth > 500) {
    //   let perpx = 0.005/window.innerWidth;
    // }
    let ratio = perpx * 75;
    $(".swiper-slide svg").attr('width',''+ratio+'%');

  }
  else {
    $(".swiper-slide svg").attr('width','75%');
  }
}

$(window).resize(scaleTutorial);
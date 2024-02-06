function down() {
    window.scrollTo({
        top: 850,
        behavior: "smooth",
      });
}

$(document).ready(function() {
  $(document).on("scroll", function() {
    var pageBottom = $(window).scrollTop() + $(window).height();
  
    $(".tag").each(function() {
      var tagTop = $(this).position().top;
      $(this).toggleClass("visible", tagTop < pageBottom);
    });
  });
});

function down() {
  window.scroll({
    top: document.getElementById("sec_2").offsetTop,
    behavior: "smooth"
  });
}



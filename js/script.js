$(document).ready(function(){
    $(".slider").owlCarousel({
        items: 1,
        loop : true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $(".btn-nav").on("click", function() {
        var target = $(this).data("target");
        $(target).toggleClass("nav__list--open");
    });
  });
  const wrapper = document.querySelector(".input-wrapper"), /*Кнопка поиск*/
      textInput = document.querySelector("input[type='text']");
        
textInput.addEventListener("keyup", event => {
  wrapper.setAttribute("data-text", event.target.value);
});/*Кнопка поск*/

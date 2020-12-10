$(document).ready(function () {
  if ($(".form__input").hasClass("input__phone")) {
    $(".input__phone").mask("+7 (999) 999-9999");
  }

  // Убирает маску и запускает видео
  $(".offer__video__mask").click(function () {
    $(this).fadeOut();
    $(this).find(".offer__video").get(0).play();
    $(this).find(".offer__video").attr("controls", "controls");
  });

  // Слайдер
  $("#resultsSlider").not(".slick-initialized").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    asNavFor: "#resultsNav",
  });

  // Навигация для слайдера
  $("#resultsNav").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 3,
    asNavFor: "#resultsSlider",
    focusOnSelect: true,
  });
});

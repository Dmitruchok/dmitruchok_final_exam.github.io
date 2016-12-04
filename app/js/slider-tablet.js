$(function () {

var $leftArrovClick = $('.carousel-arrow-left');
var $rightArrovClick = $('.carousel-arrow-right');
var elementsList = $('.container-list');

var pixelsOffset = 240;
var currentLeftValue = 0;
var elementsCount = elementsList.find('li').length;
var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
var maximumOffset = 0;

$('.carousel-arrow-left').click(function () {
  if (currentLeftValue != maximumOffset) {
    currentLeftValue += 240;
    elementsList.animate({ left : currentLeftValue + "px"}, 500);
  }
});

$('.carousel-arrow-right').click(function () {
  if (currentLeftValue != minimumOffset) {
    currentLeftValue -= 240;
    elementsList.animate({ left : currentLeftValue + "px"}, 500);
  }
});

var $leftArrovClick2 = $('.carousel-arrow-left-2');
var $rightArrovClick2 = $('.carousel-arrow-right-2');
var elementsList2 = $('.container-list-2');

$('.carousel-arrow-left-2').click(function () {
  if (currentLeftValue != maximumOffset) {
    currentLeftValue += 240;
    elementsList2.animate({ left : currentLeftValue + "px"}, 500);
  }
});

$('.carousel-arrow-right-2').click(function () {
  if (currentLeftValue != minimumOffset) {
    currentLeftValue -= 240;
    elementsList2.animate({ left : currentLeftValue + "px"}, 500);
  }
});


var $leftArrovClick3 = $('.carousel-arrow-left-3');
var $rightArrovClick3 = $('.carousel-arrow-right-3');
var elementsList3 = $('.container-list-3');


$('.carousel-arrow-left-3').click(function () {
  if (currentLeftValue != maximumOffset) {
    currentLeftValue += 240;
    elementsList3.animate({ left : currentLeftValue + "px"}, 500);
  }
});

$('.carousel-arrow-right-3').click(function () {
  if (currentLeftValue != minimumOffset) {
    currentLeftValue -= 240;
    elementsList3.animate({ left : currentLeftValue + "px"}, 500);
  }
});

});

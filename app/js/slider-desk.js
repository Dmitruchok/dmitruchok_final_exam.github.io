$(function () {

var $leftArrovClick = $('.carousel-arrow-left-desk');
var $rightArrovClick = $('.carousel-arrow-right-desk');
var elementsList = $('.container-list-desk');

var pixelsOffset = 300;
var currentLeftValue = 0;
var elementsCount = elementsList.find('li').length;
var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
var maximumOffset = 0;

$('.carousel-arrow-left-desk').click(function () {
  if (currentLeftValue != maximumOffset) {
    currentLeftValue += 300;
    elementsList.animate({ left : currentLeftValue + "px"}, 500);
  }
});

$('.carousel-arrow-right-desk').click(function () {
  if (currentLeftValue != minimumOffset) {
    currentLeftValue -= 300;
    elementsList.animate({ left : currentLeftValue + "px"}, 500);
  }
});

var $leftArrovClick2 = $('.carousel-arrow-left-desk-2');
var $rightArrovClick2 = $('.carousel-arrow-right-desk-2');
var elementsList2 = $('.container-list-desk-2');

$('.carousel-arrow-left-desk-2').click(function () {
  if (currentLeftValue != maximumOffset) {
    currentLeftValue += 300;
    elementsList2.animate({ left : currentLeftValue + "px"}, 500);
  }
});

$('.carousel-arrow-right-desk-2').click(function () {
  if (currentLeftValue != minimumOffset) {
    currentLeftValue -= 300;
    elementsList2.animate({ left : currentLeftValue + "px"}, 500);
  }
});


var $leftArrovClick3 = $('.carousel-arrow-left-desk-3');
var $rightArrovClick3 = $('.carousel-arrow-right-desk-3');
var elementsList3 = $('.container-list-desk-3');


$('.carousel-arrow-left-desk-3').click(function () {
  if (currentLeftValue != maximumOffset) {
    currentLeftValue += 300;
    elementsList3.animate({ left : currentLeftValue + "px"}, 500);
  }
});

$('.carousel-arrow-right-desk-3').click(function () {
  if (currentLeftValue != minimumOffset) {
    currentLeftValue -= 300;
    elementsList3.animate({ left : currentLeftValue + "px"}, 500);
  }
});

});

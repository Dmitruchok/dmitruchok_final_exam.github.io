$(function () {

var leftArrovClick = $( '.carousel-arrow-left' ),
    rightArrovClick = $( '.carousel-arrow-right' ),
    elementsList = $( '.container-list' );

var pixelsOffset = 240,
    currentLeftValue = 0,
    elementsCount = elementsList.find( 'li' ).length,
    minimumOffset = - (( elementsCount - 1 ) * pixelsOffset ),
    maximumOffset = 0;

leftArrovClick.click(function () {
  if ( currentLeftValue != maximumOffset ) {
    currentLeftValue += 240;
    elementsList.animate({ left : currentLeftValue + "px" }, 600);
  }
});

rightArrovClick.click(function () {
  if ( currentLeftValue != minimumOffset ) {
    currentLeftValue -= 240;
    elementsList.animate({ left : currentLeftValue + "px"}, 600);
  }
});

var leftArrovClick2 = $( '.carousel-arrow-left-2' ),
    rightArrovClick2 = $( '.carousel-arrow-right-2' ),
    elementsList2 = $( '.container-list-2' );

var pixelsOffset2 = 240,
    currentLeftValue2 = 0,
    elementsCount2 = elementsList2.find( 'li' ).length,
    minimumOffset2 = - (( elementsCount2 - 1 ) * pixelsOffset2 ),
    maximumOffset2 = 0;

leftArrovClick2.click(function () {
  if ( currentLeftValue2 != maximumOffset2 ) {
    currentLeftValue2 += 240;
    elementsList2.animate({ left : currentLeftValue2 + "px" }, 600);
  }
});

rightArrovClick2.click(function () {
  if ( currentLeftValue2 != minimumOffset2 ) {
    currentLeftValue2 -= 240;
    elementsList2.animate({ left : currentLeftValue2 + "px"}, 600);
  }
});




var leftArrovClick3 = $( '.carousel-arrow-left-3' ),
    rightArrovClick3 = $( '.carousel-arrow-right-3' ),
    elementsList3 = $( '.container-list-3' );

var pixelsOffset3 = 240,
    currentLeftValue3 = 0,
    elementsCount3 = elementsList3.find( 'li' ).length,
    minimumOffset3 = - (( elementsCount3 - 1 ) * pixelsOffset3 ),
    maximumOffset3 = 0;

leftArrovClick3.click(function () {
  if ( currentLeftValue3 != maximumOffset3 ) {
    currentLeftValue3 += 240;
    elementsList3.animate({ left : currentLeftValue3 + "px" }, 600);
  }
});

rightArrovClick3.click(function () {
  if ( currentLeftValue3 != minimumOffset3 ) {
    currentLeftValue3 -= 240;
    elementsList3.animate({ left : currentLeftValue3 + "px"}, 600);
  }
});

});

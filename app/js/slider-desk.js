$(function () {

var leftArrovClickDesk = $( '.carousel-arrow-left-desk' ),
    rightArrovClickDesk = $( '.carousel-arrow-right-desk' ),
    elementsListDesk = $( '.container-list-desk' );

var pixelsOffsetDesk = 300,
    currentLeftValueDesk = 0,
    elementsCountDesk = elementsListDesk.find( 'li' ).length,
    minimumOffsetDesk = - (( elementsCountDesk - 1 ) * pixelsOffsetDesk ),
    maximumOffsetDesk = 0;

leftArrovClickDesk.click(function () {
  if ( currentLeftValueDesk != maximumOffsetDesk ) {
    currentLeftValueDesk += 300;
    elementsListDesk.animate({ left : currentLeftValueDesk + "px" }, 500);
  }
});

rightArrovClickDesk.click(function () {
  if ( currentLeftValueDesk != minimumOffsetDesk ) {
    currentLeftValueDesk -= 300;
    elementsListDesk.animate({ left : currentLeftValueDesk + "px" }, 500);
  }
});


var leftArrovClickDesk2 = $( '.carousel-arrow-left-desk-2' ),
    rightArrovClickDesk2 = $( '.carousel-arrow-right-desk-2' ),
    elementsListDesk2 = $( '.container-list-desk-2' );

var pixelsOffsetDesk2 = 300,
    currentLeftValueDesk2 = 0,
    elementsCountDesk2 = elementsListDesk2.find( 'li' ).length,
    minimumOffsetDesk2 = - (( elementsCountDesk2 - 1 ) * pixelsOffsetDesk2 ),
    maximumOffsetDesk2 = 0;

leftArrovClickDesk2.click(function () {
  if ( currentLeftValueDesk2 != maximumOffsetDesk2 ) {
    currentLeftValueDesk2 += 300;
    elementsListDesk2.animate({ left : currentLeftValueDesk2 + "px" }, 500);
  }
});

rightArrovClickDesk2.click(function () {
  if ( currentLeftValueDesk2 != minimumOffsetDesk2 ) {
    currentLeftValueDesk2 -= 300;
    elementsListDesk2.animate({ left : currentLeftValueDesk2 + "px" }, 500);
  }
});

var leftArrovClickDesk3 = $( '.carousel-arrow-left-desk-3' ),
    rightArrovClickDesk3 = $( '.carousel-arrow-right-desk-3' ),
    elementsListDesk3 = $( '.container-list-desk-3' );

var pixelsOffsetDesk3 = 300,
    currentLeftValueDesk3 = 0,
    elementsCountDesk3 = elementsListDesk3.find( 'li' ).length,
    minimumOffsetDesk3 = - (( elementsCountDesk3 - 1 ) * pixelsOffsetDesk3 ),
    maximumOffsetDesk3 = 0;

leftArrovClickDesk3.click(function () {
  if ( currentLeftValueDesk3 != maximumOffsetDesk3 ) {
    currentLeftValueDesk3 += 300;
    elementsListDesk3.animate({ left : currentLeftValueDesk3 + "px" }, 500);
  }
});

rightArrovClickDesk3.click(function () {
  if ( currentLeftValueDesk3 != minimumOffsetDesk3 ) {
    currentLeftValueDesk3 -= 300;
    elementsListDesk3.animate({ left : currentLeftValueDesk3 + "px" }, 500);
  }
});
});

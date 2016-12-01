$(function () {

var html = $( '#activity-pic-containar' ).html();

  function loadPicture() {
    var  inputText = $( '.search-enter-text' ).val();
    $.ajax({
      url: 'https://pixabay.com/api/?key=3630931-670473688b01fdf5a6341f310&q=yellow+flowers&image_type=photo&cat=&min_width=&min_height=&q='+inputText+'&order=popular',
      mathod: 'POST',//Отправить Get чтобы получить данные
      dataType: 'jsonp',
      success: function ( data ) {
        console.log( 'Load information' );
      },
      error: function () {
        console.log( 'Appired problem!!' );
      }
    }).done(function (data) {

      var template = $( data.hits );

      var content = tmpl( html, {
        data: template
      });
      var result = $( '.activity' ).append( '<div class="result"></div>' )
      $( '.result' ).append( content );
    })
  };

  loadPicture();

$( '.search-button' ).click(function () {
  $( '.result' ).remove( '.result' );
  loadPicture();
});

$( '.search-enter-text' ).keypress(function enterText( e ) {
  if( e.keyCode === 13 ) {
    $( '.result' ).remove( '.result' );
    e.preventDefault();
    loadPicture();
  };
})

$( '#activity-pic-containar' ).masonry({
  itemSelector: '.item'
});

var leftArrovClick = $( '.carousel-arrow-left' ),
    rightArrovClick = $( '.carousel-arrow-right' );

var pixelsOffset = 240,
    currentLeftValue = 0,
    maximumOffset = 0;

function sliderRight ( arrowInBox ) {
 var ul = $( arrowInBox ).find(".container-list"),
  allList = $( arrowInBox ).find("li").length,
  minimumOffset = - ((allList - 1) * pixelsOffset);

   if ( currentLeftValue != minimumOffset ) {
     currentLeftValue -= 240;
     $( ul ).animate({ left : currentLeftValue + "px" }, 600);
   }
};

function sliderLeft( arrowInBox ) {
 var ul = $( arrowInBox ).find( ".container-list" ),
  allList = $( arrowInBox ).find( "li" );
  console.log(allList.length);

   if ( currentLeftValue != maximumOffset)  {
     currentLeftValue += 240;
     $( ul ).animate({ left : currentLeftValue + "px" }, 600);
   }
};

$( document ).on( "click", ".carousel-arrow-right", function() {
 var arrowInBox = $( this ).closest( ".carusel-container-box" );
 sliderRight( arrowInBox );
});

$( document ).on( "click", ".carousel-arrow-left", function() {
 var arrowInBox = $( this ).closest( ".carusel-container-box" );
 sliderLeft( arrowInBox );
});

});

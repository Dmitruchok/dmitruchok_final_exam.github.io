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
  $('.search-enter-text').val('');
  loadPicture();
});

$( '.search-enter-text' ).keypress(function enterText( e ) {
  if( e.keyCode === 13 ) {
    $( '.result' ).remove( '.result' );
    e.preventDefault();
    $('.search-enter-text').val('');
    loadPicture();
  };
})

$( '#activity-pic-containar' ).masonry({
  itemSelector: '.item'
});

// var currentLeftValue = 0,
//     maximumOffset = 0;
//
// function sliderRight ( arrowInBox) {
// console.log(arrowInBox);
// var img = $(arrowInBox).find('li').width();
//
//   if ( img == 300 ) {
//     var ul = $( arrowInBox ).find(".container-list-desk"),
//         allList = $( arrowInBox ).find("li").length,
//         minimumOffset = - ((allList - 1) * img);
//
//     if ( currentLeftValue != minimumOffset ) {
//       currentLeftValue -= img;
//       $( ul ).animate({ left : currentLeftValue + "px" }, 600);
//     }
//
//   } else {
//     var ul = $( arrowInBox ).find(".container-list"),
//         allList = $( arrowInBox ).find("li").length,
//         minimumOffset = - ((allList - 1) * img);
//
//       if ( currentLeftValue != minimumOffset ) {
//         currentLeftValue -= img;
//         $( ul ).animate({ left : currentLeftValue + "px" }, 600);
//       }
//   }
// };

// function sliderLeft( arrowInBox ) {
//  var ul = $( arrowInBox ).find( ".container-list" ),
//      allList = $( arrowInBox ).find( "li" );
//
//    if ( currentLeftValue != maximumOffset)  {
//      currentLeftValue += img;
//      $( ul ).animate({ left : currentLeftValue + "px" }, 600);
//    };
// };

// $( document ).on( "click", ".carousel-arrow-right", function() {
//  var arrowInBox = $( this ).closest( ".main-block" );
//  sliderRight( arrowInBox );
// });
//
// $( document ).on( "click", ".carousel-arrow-right-desk", function() {
//  var arrowInBox = $( this ).closest( ".main-block" );
//   sliderRight( arrowInBox );
// });
//
// $( document ).on( "click", ".carousel-arrow-left", function() {
//  var arrowInBox = $( this ).closest( ".main-block" );
//  sliderLeft( arrowInBox );
// });


});

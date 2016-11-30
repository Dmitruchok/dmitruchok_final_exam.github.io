$(function () {

var html = $('#activity-pic-containar').html();

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

      var template = $(data.hits);

      var content = tmpl( html, {
        data: template
      });
      var result = $( '.activity' ).append( '<div class="result"></div>' )
      $( '.result' ).append( content );
    })
  };

  loadPicture();

$('.search-button').click(function () {
  $('.result').remove('.result');
  loadPicture();
});

$('.search-enter-text' ).keypress(function enterText( e ) {
  if( e.keyCode === 13 ) {
    $( '.result' ).remove( '.result' );
    e.preventDefault();
    loadPicture();
  };
})

$('#activity-pic-containar').masonry({
  itemSelector: '.item'
});

var leftArrovClick = $('.carousel-arrow-left'),
    rightArrovClick = $('.carousel-arrow-right '),
    elementsList = $('.container-list');

var pixelsOffset = 240;
var currentLeftValue = 0;
var elementsCount = elementsList.find('.carusel-element').length;
var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
var maximumOffset = 0;

// $('.carusel-container').each(function () {
//   var obj = $(this).find('.carusel');
//   console.log(obj);
//   var sl = $(this).closest(".carusel"); // находим, в каком блоке был клик
//   console.log(sl);
// });
//
// function t(obj, sl) {
//   var ul = $(sl).find("ul"); // находим блок
//   var bl = $(sl).find("li.carusel"+obj); // находим любой из элементов блока
//   var step = $(bl).width(); // ширина объекта
//   $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
// };

  leftArrovClick.click(function () {
    t();
    if (currentLeftValue != maximumOffset) {
      currentLeftValue += 240;
      elementsList.animate({ left : currentLeftValue + "px"}, 200);
    }
  });

  rightArrovClick.click(function () {
    if (currentLeftValue != minimumOffset) {
      currentLeftValue -= 240;
      elementsList.animate({ left : currentLeftValue + "px"}, 200);
    }
  });



});

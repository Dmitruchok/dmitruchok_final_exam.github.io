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

var pixelsOffset = 240,
    currentLeftValue = 0,
    elementsCount = elementsList.find('.carusel-element').length,
    minimumOffset = - ((elementsCount - 1) * pixelsOffset),
    maximumOffset = 0;

  // leftArrovClick.click(function () {
  //   if (currentLeftValue != maximumOffset) {
  //     currentLeftValue += 240;
  //     elementsList.animate({ left : currentLeftValue + "px"}, 200);
  //   }
  // });
  //
  // rightArrovClick.click(function () {
  //   if (currentLeftValue != minimumOffset) {
  //     currentLeftValue -= 240;
  //     elementsList.animate({ left : currentLeftValue + "px"}, 200);
  //   }
  // });


$(elementsList).each(function () {
    var obj = $(this);
    console.log(obj);
    return obj;
  });

  function slider(obj, sl) {
    console.log(sl);
    $('.container-list').css('left', '240px');
    // ul.css('left', '240px');
      if (currentLeftValue != minimumOffset) {
          currentLeftValue -= 240;
          elementsList.animate({ left : currentLeftValue + "px"}, 200);
        }
  };

  rightArrovClick.click(function (obj) {
  console.log('1=========',obj);
    var sl = $(obj).closest('.carusel-container-box');
    // var ul = $(sl).find('.container-list');
     console.log(sl);
    slider(obj, sl);

  });
});

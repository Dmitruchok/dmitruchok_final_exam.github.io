$(function () {

var html = $('#pic-box').html();

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
      console.log(template);

      var content = tmpl( html, {
        data: template
      });
      $( '.activity' ).append( content );
    })
  };

$('.search-button').click(function () {
  loadPicture();
})

});

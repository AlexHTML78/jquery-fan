$( "li" ).each(function() {
  $(this).on('click touchstart', function(){
      $(this).hide();
      $(this).next().show();
  });
});

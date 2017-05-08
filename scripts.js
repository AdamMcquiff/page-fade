$(document).ready(function() {
    $('body').fadeIn(1000);
    $('body').toggleClass('entering');
    $('.page-link').click(function() {
      $('body').toggleClass('entering');
      event.preventDefault();
      let location = $(this).attr("href");
      $('body').fadeOut(1000, () => {
        window.location = location;
      });
    });
});

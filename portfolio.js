$(function(){
    $(document).scroll(function(){
      var $nav = $("#navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

$(function() {
	$(document).scroll(function() {
		var $welcome = $("#welcome-section h1, #welcome-section h2 ");
		var $h1 = $("h1");
		$welcome.toggleClass("scrolled", $(this).scrollTop() > $h1.height());
	});
});

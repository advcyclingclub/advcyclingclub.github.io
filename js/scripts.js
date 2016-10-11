$('#menu').on('click', function() {
  $(document.body).toggleClass('open');
});



var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	spaceBetween: 30,
	loop: true,
	hashnav: true,
	effect: 'fade'
});


$('.thumbnail').click(function (e) {
	var thumb = $('.thumbnail').index(this) +1;
	console.log('tits');
	swiper.slideTo(thumb);	
	$('.thumbnail').removeClass('active');
	$(this).addClass('active'); 
	//swiper.slideNext();
	e.preventDefault();
});

$('#hero').addClass('background-move');


/*
// Find all YouTube videos
var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com']"),

// The element that is fluid width
$fluidEl = $("body");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();
*/
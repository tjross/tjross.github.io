$('#select').selectize({
    create: true,
    optgroupOrder: ["Weddings", "Other Events"]
});

$('#product').typed({
    strings: [' ', 'Cake Topper', 'Table Centerpieces', 'Cufflinks'],
    typeSpeed: 120,
    backSpeed: 120,
    backDelay: 7000,
    showCursor: false,
    loop: true,
    preStringTyped: function(arrayPos) {
	var images = [
	    'url(../images/Hero_highres_full_width.jpg)',
	    'url(../images/Hero_Cake_Topper.png)',
	    'url(../images/Hero_Centerpiece.jpg)',
	    'url(../images/Hero_Cufflinks.jpg)',
	];
	$('.hero').css('background-image', images[arrayPos]);
	if (arrayPos > 0) {
	    $('.hero h1').css('color', '#fff');
	    $('.hero h2').css('color', '#fff');
	    $('.hero h3').css('color', '#fff');
	} else {
	    $('.hero h1').css('color', '#000');
	    $('.hero h2').css('color', '#000');
	    $('.hero h3').css('color', '#000');
	}
    }
});

$('#occasion').typed({
    strings: [' ', 'Your Wedding', 'a Baby Shower', 'Your Groomsmen'],
    typeSpeed: 120,
    backSpeed: 120,
    backDelay: 7000,
    showCursor: false,
    loop: true,
});

// Width of inspiration pictures should be relative to height for responsiveness
var currentWidth = $('.inspiration').width();
$('.inspiration').css({'height': currentWidth+'px'});

// Datepicker
rome(duedate, {time: false});


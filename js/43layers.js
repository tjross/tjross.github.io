$('#select').selectize({
    create: true,
    optgroupOrder: ["Weddings", "Other Events"]
});

$('#product').typed({
    strings: ['\nCake Topper ', '\nTable Centerpieces ',
	      '\nCufflinks ', '\nTiebar '],
    contentType: 'text',
    typeSpeed: 250,
    backSpeed: 250,
    startDelay: 0,
    backDelay: 7000,
    showCursor: false,
    loop: true,
    preStringTyped: function(arrayPos) {
	var images = [
	    'url(../images/Hero_Cake_Topper.png)',
	    'url(../images/Hero_Centerpiece.jpg)',
	    'url(../images/Hero_Cufflinks.jpg)',
	    'url(../images/Hero_Tiebar.png)',
	];
	$('.hero').css('background-image', images[arrayPos]);
    }
});

$('#occasion').typed({
    strings: ['\nYour Wedding', '\na Baby Shower',
	      '\nYour Groomsmen', '\nBest Man'],
    contentType: 'text',
    typeSpeed: 250,
    backSpeed: 250,
    startDelay: 0,
    backDelay: 7000,
    showCursor: false,
    loop: true,
});

// Width of inspiration pictures should be relative to height for responsiveness
var currentWidth = $('.inspiration').width();
$('.inspiration').css({'height': currentWidth+'px'});

// Datepicker
rome(duedate, {time: false});


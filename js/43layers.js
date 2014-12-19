$('#select').selectize({
    create: true,
    optgroupOrder: ["Weddings", "Other Events"]
});

$('#product').typed({
    strings: ['Cake Topper', 'Table Centerpieces',
	      'Cufflinks', 'Tie Bar'],
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
    strings: ['Your Wedding', 'a Baby Shower',
	      'Your Groomsmen', 'Best Man'],
    contentType: 'text',
    typeSpeed: 250,
    backSpeed: 250,
    startDelay: 4000,
    backDelay: 6000,
    showCursor: false,
    loop: true,
});

// Width of inspiration pictures should be relative to height for responsiveness
var currentWidth = $('.inspiration').width();
$('.inspiration').css({'height': currentWidth+'px'});

// Datepicker
rome(duedate, {time: false});


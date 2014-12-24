$('#select').selectize({
    create: true,
    optgroupOrder: ["Weddings", "Other Events"]
});


// Animation in hero image using textillate.js
$(function() {
    $('#product').textillate({
	selector: '.texts',
	loop: true,
	minDisplayTime: 7000,
	in: {
	    effect: 'fadeInDown',
	    sync: true
	},
	out: {
	    effect: 'fadeOutDown',
	    sync: true
	}
    });
});

$(function() {
    $('#occasion').textillate({
	selector: '.texts',
	loop: true,
	minDisplayTime: 7000,
	in: {
	    effect: 'fadeInDown',
	    sync: true
	},
	out: {
	    effect: 'fadeOutDown',
	    sync: true
	}
    });
});

// Change the background image when the 
currentBg = 0;
$('#occasion').on('outAnimationBegin.tlt', function() {
    currentBg++;
    if (currentBg > 3) {
	currentBg = 0;
    }
    var images = [
	'url(../images/Hero_Cake_Topper.png)',
	'url(../images/Hero_Centerpiece.jpg)',
	'url(../images/Hero_Cufflinks.jpg)',
	'url(../images/Hero_Tiebar.jpg)',
    ];
    $('.hero').css('background-image', images[currentBg]);
});


// Width of inspiration pictures should be relative to height for responsiveness
var currentWidth = $('.inspiration').width();
$('.inspiration').css({'height': currentWidth+'px'});

// Datepicker
rome(duedate, {time: false});


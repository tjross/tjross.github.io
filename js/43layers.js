$('#select').selectize({
    create: true,
    optgroupOrder: ["Weddings", "Other Events"]
});

$(function() {
    $('.animate').textillate({
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

// Width of inspiration pictures should be relative to height for responsiveness
var currentWidth = $('.inspiration').width();
$('.inspiration').css({'height': currentWidth+'px'});

// Datepicker
rome(duedate, {time: false});


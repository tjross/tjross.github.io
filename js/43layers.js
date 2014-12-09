$('#select').selectize({
    create: true,
    optgroupOrder: ["Weddings", "Other Events"]
});

$(function() {
    $("#first-typed").typed({
	strings: ["Cake Topper", "Cufflinks", "Wedding Gift", "Necklaces", "Wine Charms", "Confetti", "Table Centerpieces"],
	typeSpeed: 80,
	showCursor: false,
	backDelay: 5000,
	startDelay: 500,
	loop: true
    });
});

$(function() {
    $("#second-typed").typed({
	strings: ["your Wedding", "Groomsmen", "Your Fiancé", "Bridesmaids", "a Dinner Party", "New Years Eve", "a Baby Shower"],
	typeSpeed: 80,
	showCursor: false,
	backDelay: 5000,
	startDelay: 3000,
	loop: true
    });
});

// Width of inspiration pictures should be relative to height for responsiveness
var currentWidth = $('.inspiration').width();
$('.inspiration').css({'height': currentWidth+'px'});

// Datepicker
rome(duedate,
     {time: false,
     });


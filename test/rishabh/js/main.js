function intro() {
	$('#scene2').show();

	TweenMax.from("#scene2", 0.5, {
				scale: 1,
				opacity: 0,
				delay: 8,
				ease:  SlowMo.ease.config(0.7, 0.7, false),
				onComplete: part1
	});

	TweenMax.to("#scene1", 7, {
				scale: 2,
				opacity: 0,
				ease: Power0.easeNone
				
	});

	TweenMax.to("#flash", 5, {
				opacity: 1,
				delay: 25,
				ease: Elastic.easeInOut.config(2.5, 0.1)
				
	});

};
function part1() {
	$('#scene3').show();
	TweenMax.from("#scene3", 1, {
				opacity: 0,
				delay: 6,
				ease: Power0.easeNone,
				onComplete: part2
	});
};
function part2() {
	$('#scene4').show();
	TweenMax.from("#scene4", 1, {
				opacity: 0,
				delay: 2,
				ease: Power0.easeNone,
				onComplete: part3
	});
};
function part3() {
	$('#scene5').show();
	TweenMax.from("#scene5", 3, {
				opacity: 0,
				delay: 3,
				ease: Elastic.easeInOut.config(2.5, 0.1),
				onComplete: part4
	});	
	TweenMax.to("#scene5", 9, {
				scale: 1.5,
				delay: 5,
				ease: Power0.easeNone
	});	
}
function part4() {
	$('#scene6').show();
	TweenMax.from("#scene6", 1, {
				opacity: 0,
				delay: 10,
				ease: Power0.easeNone,
				onComplete: choicesA
	});	
}
function choicesA() {
	$('.choices').show();
}
function choicesB() {
	$('.choices').show();
	$('.choices').html('<button id = "ch3" class ="label">Stay</button><button id = "ch4" class ="label">Escape</button>');
}
$('#ch2').click(function() {
	$('#scene7').show();
	TweenMax.from("#scene7", 1, {
				opacity: 0,
				ease: Power0.easeNone,
				onComplete: choicesB
	});
	$('.choices').hide();
});
$('#ch1').click(function() {
	document.write('Game over');
	$('.choices').hide();
});
$('#ch3').click(function() {
	$('#scene8').show();
	TweenMax.from("#scene8", 1, {
				opacity: 0,
				delay: 1,
				ease: Power0.easeNone
	});
	$('.choices').hide();
});
intro();
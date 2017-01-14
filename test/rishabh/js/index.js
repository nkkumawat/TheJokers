fn = {};
te = {};
(function(d,$,t) {
	fn.getData = function() {
	var url = "http://localhost/hack/TheJokers/rishabh/index.php";
	return $.getJSON(url);
	};

// ["secne2.png", "hola", " SlowMo.ease.config(0.7, 0.7, false),", "8", "0", "1", "1"]
	var i = 0
	 master() {
		fn.getData().done(function(data) { 
					i++;
});
		console.log(data[i].ease);
    if(data[i].fromto==0) {
    t.to("#scene"+i,data[i].timer, {
			ease:data[i].ease,
			delay:data[i].delay,
			opacity:data[i].opacity,
			scale:data[i].scale
			onComplete: master
		});
    }
    else {
    t.from("#scene"+i,data[i].timer, {
			ease:data[i].ease,
			delay:data[i].delay,
			opacity:data[i].opacity,
			scale:data[i].scale
			onComplete: master
		});

    }
	};

	




})(document,$,TweenMax);
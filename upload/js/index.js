fn = {};

(function(d,$,t) {
	fn.getData = function() {
	var url = "http://localhost/hack/TheJokers/upload/index.php?slide=2";
	return $.getJSON(url);
	};
	console.log("out");
	fn.tween = function(data) {
		t.to("#scene2",10, {
			ease:data[2],
			delay:data[3],
			opacity:data[4],
			scale:data[5]
		});

	}
	fn.getData().done(function(data) {
	fn.tween(data);
	console.log("in");
	});
})(document,$,TweenMax);
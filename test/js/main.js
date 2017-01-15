var aiSrch = $('#ai-srch');
var arr = ["rishabh"];
var list = [];
var t = 0 * 1;
function intro() {
	var d = new Date();
	var n = d.getHours();
		if(n > 5 && n <=12 ) {
			aiSrch[0].placeholder = "Good Morning :)";
		}
		else if(n > 12 && n <= 16) {
			aiSrch[0].placeholder = "Good Afternoon ^-^";
		}
		else if(n > 16 && n <= 22) {
			aiSrch[0].placeholder = "Good Evening ;)";
		}
		else if(n > 22 || n <= 5) {
			aiSrch[0].placeholder = "-_-";
		}
}

function key() {
	var temp = event.keyCode;
		if (temp == 13) {
			if (aiSrch.val() != '') {
				console.log('enter');
				fn.handle(aiSrch.val());
				arr.push(aiSrch.val().toString());
				console.log(arr);
				aiSrch.val('');
				t = arr.length - 1;
			}
		}
		else if (temp == 38) {
			if( t > 0) {
				aiSrch.val(arr[t--]);
			}		
		}
		else if (temp == 40) {
			if( t < arr.length - 1) {
				t++;
				aiSrch.val(arr[t]);
			}
			else if (t == arr.length - 1) {
				aiSrch.val('');
			}
		}
}
intro();

var a = {};
var b = {};
var el = {};
var fn = {};

fn.getC = function(str) {
  return str.split(" ")[0];
};

fn.getR = function(str) {
  return str.substr(str.split(" ")[0].length + 1);
};

fn.getD = function(str) {
	return str.substr(str.split(" ")[0].length + 1);
};

fn.list = function(str, key) {
	if(fn.getC(str) == "add") {
		list.push(key);
		$('#results').html("List is:<br>");
		list.forEach(function(a, b) {
			$('#results').append( (b * 1 + 1) + ". " + a + "<br>");
		});	
	}
	else if(fn.getC(str) == "disp") {
		$('#results').html("List is:<br>");
		list.forEach(function(a, b) {
			$('#results').append( (b * 1 + 1) + ". " + a + "<br>");
		});
	}
	else if(fn.getC(str) == "del" ) {
		list.splice(key * 1 - 1, 1);
		$('#results').html("List is:<br>");
		list.forEach(function(a, b) {
			$('#results').append( (b * 1 + 1) + ". " + a + "<br>");
		});
	}
	console.log(list);
};
fn.open = function(str) {
  var c = {};
  c.c0 = str.indexOf("http") != -1;
  c.c1 = str.indexOf("www.") != -1;
  c.c2 = str.indexOf(".com") != -1;
  if (c.c0) window.open(str, "_blank");
  else if (c.c1) window.open("https://" + str, "_blank");
  else if (c.c2) window.open("https://www." + str, "_blank");
  else window.open("https://www." + str + ".com", "_blank");
};

fn.google = function(str) {
  window.open("https://www.google.co.in/search?q=" + encodeURI(str), "_blank");
};

fn.bing = function(str) {
  window.open("https://www.bing.com/search?q=" + encodeURI(str), "_blank");
};

fn.duckduckgo = function(str) {
  window.open("https://www.duckduckgo.com/?q=" + encodeURI(str), "_blank");
};

fn.youtube = function(str) {
  if (str.indexOf("youtube.com") != -1)
    window.open(str, "_blank");
  else
    window.open("https://www.youtube.com/results?search_query=" + encodeURI(str), "_blank");
};

fn.weather = function(str) {
	$.getJSON("weather/Examples/CurrentWeather.php?city="+str).done(function(data) {	$("#results").html(data);});
}

fn.info = function(str) {
	$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&format=json&search="+encodeURI(str)+"&callback=?").done(function(data){ 
	if(data[2][0].indexOf("capitalisation")!=-1 || data[2][0].indexOf("refer to")!=-1) $("#results").html("Enter Unambiguous String");
	else $("#results").html(data[2][0]+"<br/><a href='"+data[3][0])+"' >"+data[3][0]+"</a>"});
}
fn.close = function() {
	window.close();
};

fn.handle = function(str) {
  var query = {};
  query.command = fn.getC(str).toLowerCase();
  query.arg = fn.getR(str);
  query.opt = fn.getD(query.arg);
  switch (query.command) {
    case "open":
      	fn.open(query.arg);
      	break;
    case "exit":
      	fn.close();
      	break;
    case "google":
      	fn.google(query.arg);
      	break;
    case "bing":
    	fn.bing(query.arg);
    	break;
    case "duckduckgo":
    	fn.duckduckgo(query.arg);
    	break;
    case "youtube":
     	fn.youtube(query.arg);
     	 break;
	case "weather":
		fn.weather(query.arg);
		break;
    case "list":
     	 fn.list(query.arg, query.opt);
     	 break;
	case "info":
		fn.info(query.arg);
  }
};
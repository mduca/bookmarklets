var script = document.createElement('script');
script.src = "http://code.jquery.com/jquery-1.7.2.min.js";
script.type = "text/javascript";
script.onload = function() {
  jQuery.noConflict();
}

document.getElementsByTagName('head')[0].appendChild(script);

var script = document.createElement('script');
script.src = "http://code.jquery.com/ui/1.9.1/jquery-ui.min.js";
script.type = "text/javascript";
script.onload = function() {
  jQuery.noConflict();
}

document.getElementsByTagName('head')[0].appendChild(script);

var script = document.createElement('script');
script.src = "http://twitter.github.com/bootstrap/assets/js/bootstrap.js";
script.type = "text/javascript";
script.onload = function() {
  jQuery.noConflict();
}

document.getElementsByTagName('head')[0].appendChild(script);

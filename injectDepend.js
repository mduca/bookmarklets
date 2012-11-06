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

var script = document.createElement('script');
script.src = "http://raw.github.com/mduca/bookmarklets/master/hermes.prototype.js";
script.type = "text/javascript";
script.onload = function() {
  jQuery.noConflict();
}
document.getElementsByTagName('head')[0].appendChild(script);


// CSS

var css = document.createElement('link');
css.href = "http://twitter.github.com/bootstrap/assets/css/bootstrap.css";
css.rel = "stylesheet";
css.type = "text/css";
document.getElementsByTagName('head')[0].appendChild(css);

var css = document.createElement('link');
css.href = "http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css";
css.rel = "stylesheet";
css.type = "text/css";
document.getElementsByTagName('head')[0].appendChild(css);

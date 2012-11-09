var script = document.createElement('script');
script.src = "http://code.jquery.com/jquery-1.7.2.min.js";
script.type = "text/javascript";
script.onload = function() {
  jQuery.noConflict();
   
  var script = document.createElement('script');
    script.src = "http://twitter.github.com/bootstrap/assets/js/bootstrap.js";
    script.type = "text/javascript";
    document.getElementsByTagName('head')[0].appendChild(script);

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

  var panel =   

  jQuery("body").append(panel);
  
  }
document.getElementsByTagName('head')[0].appendChild(script);

var script = document.createElement('script');
    script.src = "http://code.jquery.com/ui/1.9.1/jquery-ui.min.js";
    script.type = "text/javascript";
    script.onload = function() {
      jQuery.noConflict();
      jQuery("#siesta").draggable();
    }
document.getElementsByTagName('head')[0].appendChild(script);

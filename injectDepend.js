

var script = document.createElement('script');
script.src = "http://code.jquery.com/jquery-1.7.2.min.js";
script.type = "text/javascript";
script.onload = function() {
  jQuery.noConflict();
   
  var script = document.createElement('script');
    script.src = "http://twitter.github.com/bootstrap/assets/js/bootstrap.js";
    script.type = "text/javascript";
    document.getElementsByTagName('head')[0].appendChild(script);

  var script = document.createElement('script');
    script.src = "http://code.jquery.com/ui/1.9.1/jquery-ui.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName('head')[0].appendChild(script);

  var script = document.createElement('script');
    script.src = "http://raw.github.com/mduca/bookmarklets/master/hermes.prototype.js";
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


  var barHtml = "<div id='hermes' class='navbar' style='width: 340px;'><div class='navbar-inner'><div class='container' style='width: auto;'><a class='brand' href='#'>Hermes</a><div class='btn-group' data-toggle='buttons-radio'><button id='btnStart' class='btn btn-success'>Start</button><button id='btnStop' class='btn btn-danger'>Stop</button></div><ul class='nav pull-right' role='navigatoin'><li class='dropdown'><a id='settings' href='#' role='button' class='dropdown-toggle' data-toggle='dropdown'>Settings<b class='caret'></b></a><ul class='dropdown-menu'><li><a href='#' rel='popover' placement='right' data-content='This is the settings popover dialog'>Option 1</a></li><li class='divider'></li><li><a href='#' rel='popover' placement='right' data-content='This is the settings popover dialog'>Option 2</a></li></ul></li></ul></div></div></div>";

  jQuery("body").append(barHtml);
  jQuery("#hermes").draggable();
}

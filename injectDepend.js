
var resources = [ "http://twitter.github.com/bootstrap/assets/css/bootstrap.css",
                  "http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css",
                  "http://twitter.github.com/bootstrap/assets/js/bootstrap.js",
                  "http://code.jquery.com/ui/1.9.1/jquery-ui.min.js",
                  ]

function fileType(file) {
  return file.split('.').pop();
}

function jsOrCss(file) {
  fileType(file) == 'js' ? createScriptTag(file) : createLinkTag(file);
}

function addToHead(addMe) {
  document.getElementsByTagName('head')[0].appendChild(addMe);
}

function createLinkTag(url) {
  var css = document.createElement('link');
  css.href = url;
  css.rel = "stylesheet";
  css.type = "text/css";
  //return css;
}

function createScriptTag(url) {
  var script = document.createElement('script');
  script.src = url;
  script.type = "text/javascript";
 // return script;
}

var script = document.createElement('script');
script.src = "http://code.jquery.com/jquery-1.7.2.min.js";
script.type = "text/javascript";
script.onload = function() {
  jQuery.noConflict();
  var barHtml = "<div id='hermes' class='navbar' style='width: 340px;'><div class='navbar-inner'><div class='container' style='width: auto;'><a class='brand' href='#'>Hermes</a><div class='btn-group' data-toggle='buttons-radio'><button id='btnStart' class='btn btn-success'>Start</button><button id='btnStop' class='btn btn-danger'>Stop</button></div><ul class='nav pull-right' role='navigatoin'><li class='dropdown'><a id='settings' href='#' role='button' class='dropdown-toggle' data-toggle='dropdown'>Settings<b class='caret'></b></a><ul class='dropdown-menu'><li><a href='#' rel='popover' placement='right' data-content='This is the settings popover dialog'>Option 1</a></li><li class='divider'></li><li><a href='#' rel='popover' placement='right' data-content='This is the settings popover dialog'>Option 2</a></li></ul></li></ul></div></div></div>";

   jQuery("body").append(barHtml);
   jQuery("#hermes").draggable();
}
document.getElementsByTagName('head')[0].appendChild(script);

// Main Loop
for (i = 0; i < resources.length; i++) {
  document.getElementsByTagName('head')[0].appendChild(jsOrCss(resources[i]));
  //addToHead( jsOrCss( resources[i] ) );
}

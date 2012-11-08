
var resources = [ "http://twitter.github.com/bootstrap/assets/css/bootstrap.css",
                  "http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css",
                  "http://twitter.github.com/bootstrap/assets/js/bootstrap.js",
                  "http://code.jquery.com/ui/1.9.1/jquery-ui.min.js",
                  ]

var head = document.getElementsByTagName('head')[0];

function fileType(file) {
  return file.split('.').pop();
}

function jsOrCss(file) {
  fileType(file) == 'js' ? createScriptTag(file) : createLinkTag(file);
}

function createLinkTag(url) {
  var css = document.createElement('link');
  css.href = url;
  css.rel = "stylesheet";
  css.type = "text/css";
  return css;
}

function createScriptTag(url) {
  var script = document.createElement('script');
  script.src = url;
  script.type = "text/javascript";
  return script;
}



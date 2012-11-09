alert("From for.js");
var script = document.createElement('script');
script.src = "http://code.jquery.com/jquery-1.7.2.min.js";
script.type = "text/javascript";
script.onload = function() {
  jQuery.noConflict();
  
  var resources = [ "http://twitter.github.com/bootstrap/assets/css/bootstrap.css",
                  "http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css",
                  "http://twitter.github.com/bootstrap/assets/js/bootstrap.js",
                  "http://code.jquery.com/ui/1.9.1/jquery-ui.min.js",
                  ];

  resources.forEach(function(blah) {
    alert(blah);
    document.head.appendChild(jsOrCss(blah));
  });

  function jsOrCss(file) {
    return fileType(file) == 'js' ? createScriptTag(file) : createLinkTag(file);
  }

  function fileType(file) {
    return file.split('.').pop();
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
}

document.head.appendChild(script);

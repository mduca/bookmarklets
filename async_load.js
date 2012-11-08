(function() {
  var resources = [ "http://twitter.github.com/bootstrap/assets/css/bootstrap.css",
                    "http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css",
                    "http://twitter.github.com/bootstrap/assets/js/bootstrap.js",
                    "http://code.jquery.com/ui/1.9.1/jquery-ui.min.js",
                    ];

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

  function async_load(resources){
    for (i = 0; i < resources.length; i++) {
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertAfter(jsOrCss(resource[i]), x);
    }
  if (window.attachEvent) {
    window.attachEven('onload', async_load);
  }
  else {
    window.addEventListener('load', async_load, false);
  }
})();

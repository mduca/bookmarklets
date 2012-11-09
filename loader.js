(function() {
  var url = 'http://raw.github.com/mduca/bookmarklets/master/injectDepend.js';
  if( typeof siesta!='undefined' ) {
    if ( siesta.instance !== null ) {
      siesta.close();
    }
    else {
      new siesta();
    }
  }
  else {
    var script =document.createElement('script');
    script.setAttribute('language','JavaScript');
    script.setAttribute('src',url);
    document.body.appendChild(script);
  }
})();

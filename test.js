alert("From test.js");
if (typeof jQuery == 'undefined') {
  var jQ = document.createElement('script');
  jQ.type = 'text/javascript';
  jQ.onload=getDependencies;
  jQ.onreadystatechange=function() {
    if (this.readyState == 'loaded' || this.readyState == 'complete') {
      getDependencies();
    }
  };
  jQ.src = 'http://code.jquery.com/jquery-1.7.2.min.js';
  document.body.appendChild(jQ);
}
else {
  getDependencies();
}

function getDependencies() {

  if (!jQuery.ui) {
    var jQCSS = document.createElement('link');
    jQCSS.type = 'text/css';
    jQCSS.rel= 'stylesheet';
    jQCSS.href = 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css';

    document.body.appendChild(jQCSS);

    var jQUI = document.createElement('script');
    jQUI.type = 'text/javascript';
    jQUI.src = 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js';
    jQUI.onload=getDependencies;
    jQUI.onreadystatechange=function() {
      if(this.readyState=='loaded' || this.readyState=='complete') {
        getDependencies();
      } 
    };
      document.body.appendChild(jQUI);
    } 
  else {
    main();
  }
} 

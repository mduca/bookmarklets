alert("From test.js");
if (typeof jQuery == 'undefined') {
  var jQ = document.createElement('script');
  jQ.type = 'text/javascript';
  jQ.onload=getDependencies;
  jQ.src = 'http://code.jquery.com/jquery-1.7.2.min.js';
  document.body.appendChild(jQ);
}

jQ(function($) {
  $("body").fadeOut();
  alert("blow out!");
});

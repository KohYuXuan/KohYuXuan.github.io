
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

window.onload = function() {
  var jqxhr = $.getJSON( "http://pianopick.com/test.php?callback=?", function() {
    console.log( "success" );
  })
  .done(function() {
    console.log( "second success" );
  });

};

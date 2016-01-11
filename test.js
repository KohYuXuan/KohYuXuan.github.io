
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

window.onload = function() {
  $.post( "http://pianopick.com/test.php", { name: "John", time: "2pm" })
    .done(function( data ) {
      alert( "Data Loaded: " + data );
    });
};

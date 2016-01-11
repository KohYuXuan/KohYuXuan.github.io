
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


window.onload = function() {
  /*
  var jqxhr = $.getJSON( "http://pianopick.com/test.php?callback=?", function(data) {
    console.log( "success : ", data );
  })
  .done(function() {
    console.log( "second success" );
  });*/
  console.log("start");
  $.post( "http://pianopick.com/test.php", { name: "John", time: "2pm" })
  .done(function( data ) {
    console.log( "Data Loaded: " + data );
  });

};

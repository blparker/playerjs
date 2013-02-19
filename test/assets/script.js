$(function() {

  var v = PlayerJS.attach('player1');
  v.on('ready', function() {
    console.log("#### VIMEO READY");
  });

  var sc = PlayerJS.attach('player2');
  sc.on('ready', function() {
    console.log("#### SoundCloud Ready");
  });

  var yt = PlayerJS.attach('player3');
  yt.on('ready', function() {
    console.log("#### YOUTUBE Ready");
  });
  
});


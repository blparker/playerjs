$(function() {

  var v = PlayerJS.attach('player1');
  v.on('ready', function() {
    console.log('*** Vimeo player ready');
  });

  var sc = PlayerJS.attach('player2');
  sc.on('ready', function() {
    console.log('*** SoundCloud player ready');
  });

  var yt = PlayerJS.attach('player3');
  yt.on('ready', function() {
    console.log('*** YouTube player ready');
  });
  
});


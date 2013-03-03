$(function() {

  /*
  *   Vimeo Example
  */
  var v = PlayerJS.attach('player1');
  v.on('ready', function() {
    console.log('*** Vimeo player ready');
  });

  $('#vimeo .play').on('click', function() {
    v.play();
  });
  $('#vimeo .pause').on('click', function() {
    v.pause();
  });
  /* End Vimeo */


  /*
  *   SoundCloud Example
  */
  var sc = PlayerJS.attach('player2');
  sc.on('ready', function() {
    console.log('*** SoundCloud player ready');
  });

  $('#soundcloud .play').on('click', function() {
    sc.play();
  });
  $('#soundcloud .pause').on('click', function() {
    sc.pause();
  });
  /* End SoundCloud */


  /*
  *   YouTube Example
  */
  var yt = PlayerJS.attach('player3');
  yt.on('ready', function() {
    console.log('*** YouTube player ready');
  });

  $('#youtube .play').on('click', function() {
    yt.play();
  });
  $('#youtube .pause').on('click', function() {
    yt.pause();
  });
  /* End YouTube */


  /*var r = PlayerJS.attach('player4');
  r.on('ready', function() {
    console.log('*** Rdio player ready');
  });*/
  
});


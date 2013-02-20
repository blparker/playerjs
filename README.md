PlayerJS is a lightweight wrapper around several multimedia element APIs. It provies basic event registering and control.

### Supported APIs

  - [YouTube](https://developers.google.com/youtube/iframe_api_reference)
  - [Vimeo](http://developer.vimeo.com/player/js-api)
  - [SoundCloud](http://developers.soundcloud.com/docs/api/html5-widget)

### Plugins

The API specific goo is stored in individual 'plugin' files (located in the plugins folder) to ease in development and maintenance.

### Usage

You can see several examples in the test directory.

##### YouTube

** HTML **

    <iframe id="player1" src="http://player.vimeo.com/video/19508202?api=1&amp;player_id=player1" width="500" height="281" frameborder="0" webkitallowfullscreen="webkitAllowFullScreen" mozallowfullscreen="mozallowfullscreen" allowfullscreen="allowFullScreen"></iframe>
    <br>
    <button class="play">Play</button>
    <button class="pause">Pause</button>

** JavaScript **

    var yt = PlayerJS.attach('your_player_id');
    yt.on('ready', function() {
      console.log('YouTube player is ready');
    });

    $('.play').on('click', function() {
      yt.play();
    });

    $('.pause').on('click', function() {
      yt.pause();
    });


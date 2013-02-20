PlayerJS is a lightweight wrapper around several multimedia element APIs. It provies basic event registering and control.

### Supported APIs

  - [YouTube](https://developers.google.com/youtube/iframe_api_reference)
  - [Vimeo](http://developer.vimeo.com/player/js-api)
  - [SoundCloud](http://developers.soundcloud.com/docs/api/html5-widget)

### Plugins

The API specific goo is stored in individual 'plugin' files (located in the plugins folder) to ease in development and maintenance.

### Usage

You can see several examples in the test directory.

#### YouTube

**HTML**

    <iframe id="player3" width="560" height="315" src="http://www.youtube.com/embed/ndrkwqAkt6o?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    <br>
    <button class="play">Play</button>
    <button class="pause">Pause</button>

**JavaScript**

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


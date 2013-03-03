
PlayerJS.register({
  baseUrl : 'youtube.com',
  key : 'yt',
  api : '//www.youtube.com/iframe_api',
  init : function(player, events, cb) {
    window['onYouTubeIframeAPIReady'] = function() {
      var ytPlayer = new YT.Player(player.id, {});
      ytPlayer.addEventListener('onReady', events.ready);
      cb(ytPlayer);
    };
  },
  bind : function(player, events) {
    events.play = function() {
      player.playVideo();
    };

    events.pause = function() {
      player.pauseVideo();
    };

    events.stop = function() {
      player.stopVideo();
    };
  }
});


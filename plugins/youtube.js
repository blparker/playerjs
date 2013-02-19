
PlayerJS.register({
  baseUrl : 'youtube.com',
  key : 'yt',
  api : '//www.youtube.com/iframe_api',
  init : function(player, events) {

    window['onYouTubeIframeAPIReady'] = function() {

      var ytPlayer = new YT.Player(player.id, {
        height: '390',
        width: '640',
        videoId: 'u1zgFlCw8Aw'
      });

      ytPlayer.addEventListener('onReady', events.ready);
    };
  }
});


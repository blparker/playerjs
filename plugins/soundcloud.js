
PlayerJS.register({
  key : 'sc',
  baseUrl : 'soundcloud.com',
  api : '//w.soundcloud.com/player/api.js',
  init : function(player, events, cb) {
    var scPlayer = SC.Widget(player);
    scPlayer.bind(SC.Widget.Events.READY, events.ready);
    cb(scPlayer);
  },
  bind : function(player, events) {
    events.play = function() {
      player.play();
    };

    events.pause = function() {
      player.pause();
    };
  }
});


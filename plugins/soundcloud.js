
PlayerJS.register({
  key : 'sc',
  baseUrl : 'soundcloud.com',
  api : '//w.soundcloud.com/player/api.js',
  init : function(player, events) {
    var scPlayer = SC.Widget(player);
    scPlayer.bind(SC.Widget.Events.READY, events.ready);
  }
});


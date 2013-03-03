
PlayerJS.register({
  key : 'v',
  baseUrl : 'vimeo.com',
  api : 'http://a.vimeocdn.com/js/froogaloop2.min.js',
  before : function(player) {
    // If the iframe doesn't have a player_id, add one
    if(player.src.indexOf('player_id') < 0) {
      player.src += '&player_id=' + player.id;
    }
  },
  init : function(player, events, cb) {
    var p = $f(player);
    p.addEvent('ready', events.ready);
    cb(p);
  },
  bind : function(player, events) {
    events.play = function() {
      player.api('play');
    };

    events.pause = function() {
      player.api('pause');
    };

    events.stop = function() {
      player.api('stop');
    };
  }
});


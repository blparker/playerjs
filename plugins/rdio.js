
PlayerJS.register({
  key : 'r',
  baseUrl : 'rd.io',
  api : 'http://www.rdio.com/api/swf/',
  init : function(player, events) {
    var token = 'GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc='
      , domain = 'localhost'
      , params = { 'allowScriptAccess' : 'always' }
      , flashvars = {
        'playbackToken' : token,
        'domain' : domain,
        'listener' : rdioPlayer
      };

    var rdioPlayer = {};
    console.log("##### INIT");
  },
  bind : function(player, events) {}
});


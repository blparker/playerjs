var PlayerJS = (function() {

  function Player(id) {
    this.player = document.getElementById(id);
    this.baseUrl = this.getBaseUrl();
    this.id = this.getId();
    this.events = {
      'ready' : function() {},
      'play' : function() {},
      'pause' : function() {}
    };

    // Find plugin, execute init
    var plugin = getPluginFor(this.baseUrl);
    if(plugin) {
      if(plugin.plugin.before) {
        plugin.plugin.before(this.player);
      }

      if(!plugin.started) {
        /*var s = new Creator('script')
          .attr('src', plugin.plugin.api)
          .before(document.getElementsByTagName('script')[0])
          .el();*/
        var script = document.createElement("script")
        script.type = "text/javascript";

        script.onload = function() {
          scriptLoaded();
        };

        script.src = plugin.plugin.api;
        document.getElementsByTagName('head')[0].appendChild(script);
      }
      else {
        scriptLoaded();
      }

      var self = this;
      function scriptLoaded() {
        plugin.plugin.init(self.player, self.events, function(player) {
          plugin.plugin.bind(player, self.events);
        });
      }
    }
  }

  Player.prototype = {
    on : function(event, cb) {
      this.events[event] = cb;
    },
    play : function() {
      this.events.play();
    },
    pause : function() {
      this.events.pause();
    },
    getBaseUrl : function() {
      var u = new Creator('a').attr('href', this.player.src)
      var hostName = u.prop('hostname');

      // If the hostname has a subdomain, we need to get rid of it (e.g., player.vimeo.com)
      var split = hostName.split('.');
      if(split.length > 2) {
        hostName = split[split.length - 2] + '.' + split[split.length - 1];
      }

      delete u;
      return this.normalizeUrl(hostName);
    },
    normalizeUrl : function(url) {
      if(url.indexOf('www.') === 0) {
        return url.substring(4, url.length);
      }
      return url;
    },
    getId : function() {
      return Math.round(Math.random() * new Date().getTime());
    }
  };

  var plugins = {};

  function getPluginFor(baseUrl) {
    return plugins[baseUrl];
  }

  function registerPlugin(plugin) {
    /*var s = new Creator('script')
      .attr('src', plugin.api)
      .before(document.getElementsByTagName('script')[0])
      .el();*/

    plugins[plugin.baseUrl] = {
      started : false,
      plugin : plugin
    };
  }

  function Creator(el) {
    this._el = document.createElement(el);
    return this;
  }

  Creator.prototype = {
    attr : function(key, value) {
      this._el.setAttribute(key, value);
      return this;
    },
    el : function() {
      return this._el;
    },
    prop : function(prop) {
      return this._el[prop];
    },
    before : function(node) {
      node.parentNode.insertBefore(this._el, node);
      return this;
    }
  };

  var players = {};

  return {
    attach : function(id) {
      var player = new Player(id);
      return player;
    },
    register : function(plugin) {
      registerPlugin(plugin);
    }
  };

}(PlayerJS));


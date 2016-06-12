var app = app || {};

(function() {

  app.MarkerModel = function(name, lat, lng, options = {}) {
    var self = this;
    
    self.name = name;
    self.options = options;
    self.location = ko.observable({lat: lat, lng: lng});

  }

})();
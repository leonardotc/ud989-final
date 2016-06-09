var app = app || {};

(function() {

  app.MapModel = function() {
    var self = this;
    
    self.mapData = ko.observable({
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: false,
      zoom: 10
    });
    
    self.markers = ko.observableArray([]);
    
    self.addMarker = function(marker) {
      self.markers().push(marker);
    }
  }

})();
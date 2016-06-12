var app = app || {};

(function() {

  app.MapModel = function(lat, lng, zoom = 16, markerList = []) {
    var self = this;
    
    self.mapData = ko.observable({
      center: {lat: lat, lng: lng},
      scrollwheel: false,
      zoom: zoom
    });
    
    self.markers = ko.observableArray(markerList);

  }

})();
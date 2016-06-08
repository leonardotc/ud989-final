var app = app || {};

(function() {

  app.Model = function() {
    var self = this;
    
    self.mapData = ko.observable({
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: false,
      zoom: 8
    });
  }

})();
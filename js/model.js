var app = app || {};

(function() {

  app.Model = function() {
    var self = this;
    
    self.clickHandler = function() {
      self.mapData({center: {lat: -23.533773, lng: -46.625290}});
    };
    
    self.mapData = ko.observable({
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: false,
      zoom: 10
    });
  }

})();
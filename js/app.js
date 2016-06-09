var app = app || {};

$(function() {
  var model = new app.MapModel();
  
  var total = 10;
  
  for (var i = 0; i < total; i++) {
    var lat = -23.533773 + (0.0001 * i * Math.pow(-1,i)); 
    var lng = -46.625290 + (0.0001 * i * Math.pow(-1,i));
    model.addMarker(new app.MarkerModel("Some Place " + i, lat, lng));
  }
  
  model.clickHandler = function() {
    this.mapData({center: {lat: -23.533773, lng: -46.625290}});
  };

  ko.applyBindings(model);
});
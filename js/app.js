var app = app || {};
var model
$(function() {
  model = new app.MapModel(-34.397, 150.644);
  
  model.clickHandler = function() {
    this.mapData({center: {lat: -23.533773, lng: -46.625290}});
  };

  ko.applyBindings(model);
  
  model.markers([new app.MarkerModel("Le Marker", -23.533673, -46.625590)]);
  
});
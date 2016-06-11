var app = app || {};
var model
$(function() {
  model = new app.MapModel();
  
  model.clickHandler = function() {
    this.mapData({center: {lat: -23.533773, lng: -46.625290}});
  };

  ko.applyBindings(model);
  
});
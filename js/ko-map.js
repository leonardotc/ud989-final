(function(ko) {

  if (ko) {
    ko.bindingHandlers.GoogleMaps = {
      map: null,
      
      init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

        //initialize all variables
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        var map = new google.maps.Map(element, valueUnwrapped);

        //programatically bind all (supported) events
        google.maps.event.addListener(map, 'center_changed', function() {
          var center = map.getCenter();

          valueUnwrapped.center.lat = center.lat();
          valueUnwrapped.center.lng = center.lng();
          value(valueUnwrapped);
        });

        google.maps.event.addListener(map, 'zoom_changed', function() {
          var zoom = map.getZoom();

          valueUnwrapped.zoom = zoom;
          value(valueUnwrapped);
        });

        var markers = viewModel.markers();
        for( var i = 0; i < markers.length; i++) {
          new google.maps.Marker({position: markers[i].location(), map: map});
        }
        
        self.map = map;

      },

      update: function(element, valueAccessor, allBindings, bindingContext) {        
        self.map.setOptions(ko.unwrap(valueAccessor()));
      }
    }

  }

})(ko);
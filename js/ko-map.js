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
          console.log(valueUnwrapped);
        });

        google.maps.event.addListener(map, 'zoom_changed', function() {
          var zoom = map.getZoom();

          valueUnwrapped.zoom = zoom;
          value(valueUnwrapped);
          console.log(valueUnwrapped);
        });

        self.map = map;
      },

      update: function(element, valueAccessor, allBindings, bindingContext) {        
        self.map.setOptions(ko.unwrap(valueAccessor()));
      }
    }

  }

})(ko);
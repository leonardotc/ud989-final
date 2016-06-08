(function(ko) {

  if (ko) {
    ko.bindingHandlers.GoogleMaps = {
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

        bindingContext.map = map;
      },

      update: function(element, valueAccessor, allBindings, bindingContext) {
      
        var map = bindingContext.map;
        
        
        
      }
    }

  }

})(ko);
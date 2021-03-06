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
        });

        google.maps.event.addListener(map, 'zoom_changed', function() {
          var zoom = map.getZoom();

          valueUnwrapped.zoom = zoom;
          value(valueUnwrapped);
        });
        
        bindingContext.map = map;

        viewModel.markers.subscribe(function(changes) {
          bindingContext.markers = bindingContext.markers || [];
          bindingContext.markers.forEach(function(marker) {
            marker.setMap(null);
          });

          for( var i = 0; i < changes.length; i++) {
            console.log(changes[i]);
            bindingContext.markers.push(new google.maps.Marker({position: changes[i].location(), map: map}));
          }
          
        }, null, "arrayChange");

      },

      update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {        
        bindingContext.map.setOptions(ko.unwrap(valueAccessor()));
      }
      
    }

  }

})(ko);
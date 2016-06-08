(function(ko) {

  if (ko) {
    ko.bindingHandlers.GoogleMaps = {
      init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        for (i in valueUnwrapped) console.log(i)
        new google.maps.Map(element, valueUnwrapped);
      }
    }
  }

})(ko);
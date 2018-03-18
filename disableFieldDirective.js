app.directive('disableField', function () {

      return {

            restrict: 'A',

            link: function(scope, element, attrs, modelCtrl) {


                attrs.$observe('disableField', function(value) {

                    if (value != "true") {
                        
                        attrs.$set('disabled', true);
                        
                        element.addClass('removePointer');

                    }

                });

            }

        };

  });

angular.module('app', ['ngResource']);

angular.module('app').factory("Customers", function ($resource) {
  return $resource("/api/Customers/:id");
});

angular.module('app').controller('myController', function ($scope, Customers) {
  $scope.doit = function () {
    $scope.counter = 0;
    for (i = 1; i <= 10000; i++) {
      Customers.save({"firstName": "paul" , "lastName": "van bladel", "recordNumber": i},
        function (data) {
        },
        function (err) {
          console.log(err);
          $scope.counter = $scope.counter + 1;
        });
    }

  };
});




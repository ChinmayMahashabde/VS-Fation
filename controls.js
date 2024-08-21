function studentController($scope, $http) {
    var url = "/data.json";

    $http.get(url).then(function(response) {
       $scope.students = response.data;
    });
    
    $scope.hideData = true;
    $scope.toggleData = function() {
       $scope.hideData = $scope.hideData;
    }
 }
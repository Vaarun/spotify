'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'searchCtrl'
  });
}])

.controller('searchCtrl', ['$scope', '$http', function($scope, $http) {
$scope.searchType = 'artist';
    $scope.search=function(){
        var url = 'https://api.spotify.com/v1/search?q=' + $scope.searchValue + '&type='+$scope.searchType;
        $http.get(url).then(processResponse);

    }

    var processResponse = function(response){
        $scope.searchResults = response.data;
    }

}]);
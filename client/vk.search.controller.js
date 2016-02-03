'use strict';

angular.module('vkClient').controller('SearchController', ['$scope', 'SearchService', function ($scope, SearchService){
            
    $scope.search = function (searchParam) {

        return SearchService.get({
           searchParam: searchParam
            }).$promise.then(function(data){
                return data.value;
            
            }, function(error){
                console.error('The following error occured while calling the search service: ');
                console.error(error);
           });
        };
    }
]);
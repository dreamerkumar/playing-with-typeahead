angular.module('vkClient').factory('SearchService', ['$resource', function($resource){
    
    var url = "http://services.odata.org/OData/OData.svc/Products?$format=json&$filter=substringof(':searchParam',Name)";
    return $resource(url,{
        searchParam: '@searchParam'
    });
}]);
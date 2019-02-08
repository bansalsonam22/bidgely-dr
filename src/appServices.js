var appServices = angular.module('appServices', [])
.service('GetStartTime', ['$http','$q', function($http, $q) {
    return {
        getStartTime: function () {
            var deferred = $q.defer();
            $http.get("http://8cab5a77.ngrok.io/count/2000/start_time/2017-09-01")
            .success(function(data) {
                deferred.resolve(data);
            })
            return deferred.promise;
        }
    }
 }]);

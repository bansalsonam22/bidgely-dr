var appServices = angular.module('appServices', [])
.service('DataManager', ['$http','$q', function($http, $q) {
    return {
        getData: function (options) {
            var deferred = $q.defer();
            // $http.get("http://45af4740.ngrok.io/count/"+options.userCount+"/start_time/"+options.date)
            // .success(function(data) {
            //     deferred.resolve(data);
            // });
            $.getJSON(
                '../../assets/sample_data/sample.json',
                function (data) {
                  deferred.resolve(data);
                }
            );
            return deferred.promise;
        }
    }
 }]);

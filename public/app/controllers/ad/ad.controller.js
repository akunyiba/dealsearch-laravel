adApp_ad.controller('listController', ['$scope', '$rootScope', '$http', 'services',
    function($scope, $rootScope, $http, services) {
        $rootScope.curPath = 'main';
        services.getAds().then(function(data){
            $scope.ads = data.data;
        });
        $scope.getTrClass = function(adsType) {
            var trClass;
            adsType == 'компания' ? trClass = 'warning' : '';
            return trClass;
        };
        $scope.deleteAd = function(adsID, isLast) {
            if(confirm("Are you sure you want to remove this ad: " + adsID)==true && adsID>0){
                services.deleteAd(adsID)
                    .then(services.showNotification('warning','Ad '+adsID+' deleted'))
                    .then(function(){
                        if(isLast) {
                            services.showNotification('warning','All ads are deleted');
                        }
                    })
                    .catch(function(error){
                        services.showNotification('danger','Error! Apparently something went wrong...');
                    });
            }
        };
    }]);

adApp_ad.controller('createController', ['$scope', '$rootScope', '$http', 'services','ads',
    function($scope, $rootScope, $http,services) {
        $rootScope.curPath = 'create';
        services.getCityOptions().then(function(data){
            $scope.cityOptions = data.data;
        });
        services.getCategoryOptions().then(function(data){
            $scope.categoryOptions = data.data;
        });
        $scope.createAd = function(ads) {
            var results = services.createAd(ads)
                .then(services.showNotification('success','Ad created'))
                .catch(function(error){
                    services.showNotification('danger','Error! Apparently something went wrong...');
                });
        }
    }]);

adApp_ad.controller('updateController', ['$scope', '$http', '$routeParams', 'services','ad',
    function($scope,$http,$routeParams,services,ad) {
        services.getCityOptions().then(function(data){
            $scope.cityOptions = data.data;
        });
        services.getCategoryOptions().then(function(data){
            $scope.categoryOptions = data.data;
        });
        var original = ad.data;
        $scope.ad = angular.copy(original);
        $scope.isClean = function() {
            return angular.equals(original, $scope.ad);
        };
        $scope.updateAd = function(ad) {
            var results = services.updateAd(ad)
                .then(services.showNotification('success','Ad '+ad.id+' updated'))
                .catch(function(error){
                    services.showNotification('danger','Error! Apparently something went wrong...');
                });
        }
    }]);
angular.module('apiApp',[]);
	
angular.module('apiApp').controller('apiController', function($scope, apiService) {

	$scope.login = function() {
		apiService.login().then(function(serviceData) {
			$scope.loginResult = serviceData;
		})
	}

	$scope.logout = function() {
		apiService.logout().then(function(serviceData) {
			$scope.loginResult = serviceData;
		})
	}
});

angular.module("apiApp").service("apiService", function($http, $q) { 
	baseURL = "http://localhost:1701/api";

	this.login = function() {
		var deferred = $q.defer();
		var url = baseURL + '/auth/login'
		var data = {
			email:'rest1@rest1.com',
			password:'test'
		}
		$http.post(url,data).success(function(response) {
			deferred.resolve(response);
		});
		return deferred.promise;
	}

	this.logout = function() {
		var deferred = $q.defer();
		var url = baseURL + '/auth/logout'
		$http.post(url).success(function(response) {
			deferred.resolve(response);
		});
		return deferred.promise;
	}
});



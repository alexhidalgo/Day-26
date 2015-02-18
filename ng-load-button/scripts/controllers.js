// angular.module('app.controllers', [])
// .controller('AppCtrl', function($scope) {

// 	function loadBtn() {
// 		console.log('button clicked');
// 	}
// });

angular.module('app.controllers', [])
.controller('LoadButtonCtrl', function($scope, $timeout){
	// $scope.buttonText = 'Click Me';
	// $scope.buttonDisabled = false;
	$scope.buttonText = "Click Me";

	$scope.loadBtn = function() {
			$scope.buttonText = 'Loading...';
			$scope.buttonDisabled = true;

			$timeout(function() {
				// console.log('timeout started');
				$scope.buttonDisabled = false;
				$scope.buttonText = "Submitted";
				// $scope.apply();
			}, 2000);
	};
}).controller('TabCtrl', function($scope){

	$scope.data = {
		selectedIndex: 1
	};

	// $scope.next = function() {
	// 	$scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
	// };
	// $scope.previous = function() {
 //    $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
 //  };
}).controller('SignUpCtrl', function($scope, $location){

	var user1 = {
		email: 'aaron@theironyard.com',
		password: 'password123'
	};



	$scope.submit = function() {
		if(user1.email === $scope.user.email &&
		user1.password === $scope.user.password) {
		$location.path('/ironyard.com').replace();
		console.log('correct email and password');
	} else {
		//show error
		console.log('wrong email and password');

	}
	};

});

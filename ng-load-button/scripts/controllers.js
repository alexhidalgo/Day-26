// angular.module('app.controllers', [])
// .controller('AppCtrl', function($scope) {

// 	function loadBtn() {
// 		console.log('button clicked');
// 	}
// });

app.controller('LoadButtonCtrl', function($scope, $timeout){
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
}).controller('SignUpCtrl', function($scope){

});

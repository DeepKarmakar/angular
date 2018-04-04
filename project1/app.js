var app = angular.module('myApp', []);

	app.controller('myCtrl', ['$scope', function($scope){
		$scope.employees = [
			{ 
				name: 'Deep',
				designation: 'designer',
				salary: 25,
			},
			{ 
				name: 'Piu',
				designation: 'developer',
				salary: 27,
			},
			{ 
				name: 'kishore',
				designation: 'designer',
				salary: 24,
			}
		]; 
		$scope.newEmp = {
			newEmpName: '',
			newEmpDesignation: '',
			newEmpSalary: null
		}
		$scope.add = function(){

			$scope.employees.push(
				{
					name: $scope.newEmp.newEmpName,
					designation: $scope.newEmp.newEmpDesignation,
					salary: $scope.newEmp.newEmpSalary
				}
			);

			$scope.newEmp = {
				newEmpName: '',
				newEmpDesignation: '',
				newEmpSalary: null
			}
		}

		$scope.edit = function(par, $index, $event){ 
			$scope.editPermission = {};
			$scope.editPermission[$index] = true;			
			console.log($event);
		}

		$scope.done = function(){
			$scope.editPermission = {};
		}


		$scope.del = function($index){
			var x = confirm("Are you sure you want to delete?");
			if (x){
				$scope.employees.splice($index,1);
				$scope.editPermission = {};
			}
		  
		} 


	}])

	app.directive('ngConfirmClick', [
	        function(){
	            return {
	                link: function (scope, element, attr) {
	                    var msg = attr.ngConfirmClick || "Are you sure?";
	                    var clickAction = attr.confirmedClick;
	                    element.bind('click',function (event) {
	                        if ( window.confirm(msg) ) {
	                            scope.$eval(clickAction)
	                        }
	                    });
	                }
	            };
	    }])

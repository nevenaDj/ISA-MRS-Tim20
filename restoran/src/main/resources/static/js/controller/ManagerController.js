
angular.module('myApp').controller('ManagerController',['$scope','$http','$window','$route', function($scope, $http,window, $route) {
	
	$scope.page="non-active";
	$scope.typeOfEmployee = [{
		    value: 'CHEF',
		    label: 'Chef'
		  }, {
		    value: 'WAITER',
		    label: 'Waiter'
		  }, {
			value: 'BARTENDER',
			label: 'Bartender'
		  }]; 
	$scope.selected = $scope.typeOfEmployee[0];

	function init() {
		$http.get("http://localhost:8080/api/users/login").success(
				function(data){	
					$http.post("http://localhost:8080/api/manager/login",data).success(
							function(data){
								$scope.manager=data;
								$http.post("http://localhost:8080/api/manager/getRest",$scope.manager).error(
										function(data){
											//alert("error");
									}).success(
										function(data){
											//$scope.rest=data;
											alert(JSON.stringify(data));
											$scope.manager.restaurant=data;
											
									});
								if ($scope.manager.active)
									$scope.page="profile";
							});
				});
		
		

	}
	
    init();
 
    $scope.logout=function(){
    	$http.get("http://localhost:8080/api/users/logout").success(function(data) {
    		//$window.href.location="/#/";
    	});
    	
    }
    
    $scope.update=function(){
    	$http.post("http://localhost:8080/api/manager/update", $scope.manager).success(function(data) {
    		$route.reload();
    	}).error(function(data) {
    		alert("This email address is in our system");	
    		$route.reload();
    	});
    }
    
    $scope.changePass=function(){
    	if ($scope.pw1==$scope.pw2){
    		$scope.login= $scope.manager;
    		$scope.login.password=$scope.pw1;
    		$http.post("http://localhost:8080/api/manager/changePass",$scope.login).success(
					function(data){
						$route.reload();
					});
    	} else {
    		alert("Passwords don't equals");
    		}
    }


    $scope.changeToProfile= function(){
    	if ($scope.manager.active)
    		$scope.page="profile";
    	
    }
    $scope.changeToRestaurants= function(){
    	if ($scope.manager.active)
    		$scope.page="restaurant";   	
    }
    	
    $scope.changeToMenu= function(){ 
    	if ($scope.manager.active)
    		$scope.page="menu";   	  
    }
    $scope.changeToNewItem= function(){ 
    	if ($scope.manager.active)
    		$scope.page="new_item_menu";   	  
    }
  	$scope.changeToDrinkMenu= function(){
  		if ($scope.manager.active)
    		$scope.page="drinkmenu";   	
  	}
  	$scope.changeToSupplier= function(){
  		//alert("supplier");
  		if ($scope.manager.active)
    		$scope.page="supplier";   	
  	}
  	$scope.changeToCreateSupplier= function(){  
  		if ($scope.manager.active)
    		$scope.page="create_supplier";   	
  	}
  	$scope.changeToEmployee= function(){
  		if ($scope.manager.active)
    		$scope.page="employee"; 
  	}
  	$scope.changeToCreateEmployee= function(){
  		if ($scope.manager.active)
    		$scope.page="create_employee"; 
  	}
  	$scope.changeToSchedule= function(){
  		if ($scope.manager.active)
    		$scope.page="schedule"; 
  	}
  	$scope.changeToRoens= function(){
  		if ($scope.manager.active)
    		$scope.page="reon"; 
  	}
  	$scope.changeToScores= function(){
  		if ($scope.manager.active)
    		$scope.page="scores"; 
  	}
  	$scope.changeToChangePass= function(){
  		if ($scope.manager.active)
    		$scope.page="non-active"; 
  	}
  	
  	$scope.createEmployee= function(){
  		if ($scope.manager.restaurant!=null){
  			alert($scope.selected);
  			$scope.employee.type=$scope.selected.value;
	  		$scope.employee.password="pass";
	  		$scope.employee.numbC= Number($scope.employee.numbC);
			$scope.employee.numbS= Number($scope.employee.numbS);
	  		alert(JSON.stringify($scope.employee));
	  		$http.post("http://localhost:8080/api/manager/createEmployee",{"e":$scope.employee, "r":$scope.manager.restaurant}).success(
					function(data){
						$route.reload();
					}).error(
							function(data){
								alert("Email address is used.");
							});
  		}
  	}

	$scope.createSupplier= function(){
		$scope.supplier.password="pass";
		
  		alert(JSON.stringify($scope.supplier));
  		$http.post("http://localhost:8080/api/manager/createSupplier",{"s":$scope.supplier, "r":$scope.manager.restaurant}).success(
				function(data){
					$route.reload();
				}).error(
					function(data){
						alert("Email address is used.");
					});
  	}
	
	$scope.createNewItem= function(){
		if ($scope.manager.restaurant.menu!=null){
			menu=$scope.manager.restaurant.menu;
			menu.items=[];
		}else{
			//alert("haho");
			menu={items:[]};
			//alert(JSON.stringify(menu));
		}
		menu.dateUpdate=new Date();
		//alert(JSON.stringify(menu));
		menu.items.push($scope.menuitem);
		//alert(JSON.stringify(menu));
		$http.post("http://localhost:8080/api/manager/addMenuItem", {"m":menu, "r":$scope.manager.restaurant}).success(function(data) {
			alert(JSON.stringify(data));
		}).error(function(data) {
			alert("error");
		});	
	}
	
}]);

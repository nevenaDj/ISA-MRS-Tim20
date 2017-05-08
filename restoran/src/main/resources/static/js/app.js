var app = angular.module("myApp", ["ngRoute", 'ngComboDatePicker','dnTimepicker']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html",
        controller : "AllUserController"
        
    })
    .when("/guest/login", {
        templateUrl : "main.html"
    })
    .when("/404", {
    	templateUrl :"404.html"
    })
    .when("/registration", {
        templateUrl : "registration2.html",
        controller : "UserController"
    })
    .when("/home", {
        templateUrl : "home.html",
        controller : "UserController"
    })
    .when("/sysman/index", {
   	 	templateUrl : "sys_man_index.html",
   	 	controller: "SystemManagerController"
    })
    .when("/guest/index", {
   	 	templateUrl : "guestHome.html",
   	 	controller: "GuestHomeController"
    })
    .when("/man/index", {
   	 	templateUrl : "man_index.html",
   	 	controller: "ManagerController"
    })
    .when("/supp/index", {
   	 	templateUrl : "supp_index.html",
   	 	controller: "SupplierController"
    })
    .when("/sysman/info", {
   	 	templateUrl : "sysmaninfo.html",
   	 	controller: "SystemManagerController"
    })
    .when("/sysman/manres", {
   	 	templateUrl : "listManagerRestaurants.html",
   	 	controller: "SystemManagerController"
    })
    .when("/sysman/login", {
   	 	templateUrl : "sysmanlogin.html",
   	 	controller: "SystemManagerController"
    })
    .when("/sysman/signup", {
   	 	templateUrl : "signUpSysMan.html",
   	 	controller: "SystemManagerController"
    })
    .when("/man/login", {
   	 	templateUrl : "loginMan.html"
    })
    .when("/man/info", {
    	templateUrl : "showManager.html"
    })
    .when("/supplier/login", {
    	templateUrl : "loginSupplier.html"
    })
    .when("/supplier/info", {
    	templateUrl : "showSupplier.html"
    })
    /*
    .when("/employee/login", {
    	templateUrl : "loginEmployee.html"
    	controller: "EmployeeController"
    })
    .when("/supplier/info", {
    	templateUrl : "employeeHome.html"
    })
    */
    .otherwise({ redirectTo: '/404' });
});

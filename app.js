(function(){
	var app = angular.module("person", []);

	app.directive("colOne", function(){
		return {
			restrict: "E",
			templateUrl: "colOne.html",
			controller: function(){
				this.just = function(){
					console.log('hi');
				};
			},
			controllerAs: "colOne"
		};
	});

	app.directive("colTwo", function(){
		return {
			restrict: "E",
			templateUrl: "colTwo.html"
		};
	});

	app.directive("colThree", function(){
		return {
			restrict: "E",
			templateUrl: "colThree.html"
		};
	});

	app.directive("tabContainer", function(){
		return {
			restrict: "E",
			templateUrl: "tab-template.html",
			controller: function(){
				this.currentTab = 1;
				this.setCurrentTab = function(newTab){
					this.currentTab = newTab;
				};
				this.isSet = function(selectedTab){
					return this.currentTab === selectedTab;
				};


			},
			controllerAs: "tab"
		};
	});

	app.directive("a", function(){
		return{
			restrict: "E",
			link: function(scope, elem, attrs){
				if(attrs.ngClick || attrs.href==='' || attrs.href==='#'){
					elem.on('click', function(event){
						event.preventDefault();
					});
				}
			},
		};
	});
})();
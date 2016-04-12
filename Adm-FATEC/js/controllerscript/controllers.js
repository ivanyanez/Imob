
//cria um app no angular
angular.module("app", []);

//pega o app do angular que ja tenha sido criado
var app = angular.module("app");


//cria um controller no app
app.controller("sidebarController", function($scope){
	$scope.selected_item = '';
	$scope.setItem = function(item){
		$scope.selected_item = item;
	};
});

app.controller("naviterno_cadastroimovel"),function($scope){
	
	 $scope.tab_map = {
  	dados: true,
    valores: false,
    tab3: false,
  }
  
  $scope.activate_tab = function(tab){
    for (var key in $scope.tab_map){
    		if (key === tab){
     				$scope.tab_map[key] = true;   
        }
        else{
        	$scope.tab_map[key] = false;
        }
    }
  };
});
	
	
	
}


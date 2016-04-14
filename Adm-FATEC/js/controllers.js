
angular.module("app", []);

var app = angular.module("app");


app.controller("sidebarController", function($scope, $http, $window){
	$scope.selected_item = 'imovel';
	$scope.imovel = {finalidade: ""};
	$scope.setItem = function(item){
		$scope.selected_item = item;
	};

	$scope.options = ["venda", "locacao", "temporada"];

	$scope.imoveis = [{
			finalidade: "venda",
			endereco: "Fatec",
			id: 1
		},
		{
			finalidade: "temporada",
			endereco: "Rua da fatec",
			id: 2
		}];

	$scope.remove = function(id, index){
		$scope.imoveis.splice(index, 1);
		console.log(index);
		$http.post('url_de_deletar_imovel', {id: id}).success(function(result){
			alert('Imóvel deletado!');
		}).error(function(){
//			alert("Erro ao deletar o imóvel");
		});
	};

	$scope.edit = function(imovel){
		$scope.imovel = imovel;
	};

	$scope.new = function(){
		$scope.imovel = {};
	};

	var _get_random = function(min, max){
		return Math.floor(Math.random() * (max - min)) + min;
	}

	$scope.save = function(){
		$scope.imovel = angular.copy($scope.imovel);
		if (!$scope.imovel.id){
			$scope.imovel.id = _get_random(1, 100);
			$scope.imoveis.push($scope.imovel);
		}

		// $http.post('url_de_salvar_imovel', $scope.imovel).success(function(){
		// 	alert("Dados salvos");
		// }).error(function(){
		// 	alert("Erro ao salvar os dados.");
		// }).finally(function(){
		// 	$scope.new();
		// });
	};

	$window.onload = function(){
		$http.get("colocar_url_de_buscar_imoveis_no_back").success(function(result){
			$scope.imoveis = result;
		});
	};
});

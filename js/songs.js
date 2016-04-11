var app=angular.module('myApp',[]);
app.controller('songs',  function($scope,$http, $sce){
	$scope.test='test';
	$http({method:'get',url:'songs.json'}).
	success(function (data,status) {
		//trust the url in the html tag's '<iframe>'
		for (var i = 0, len = data.length ; i < len; i++) {
			data[i].url = $sce.trustAsResourceUrl(data[i].url);
		};
		$scope.datas = data;
		$scope.status = status;
	}).
	error(function  (data,status) {
		$scope.datas = data || 'request fail';
		$scope.status = status;
	});
})
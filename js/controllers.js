app.controller('HomeController', function($scope, $http, $timeout,  $location, $rootScope, $interval, WebService) {

  $scope.tileArray = [];
  $scope.nextPageIndex = null;
  $scope.pageDetails = null;
  $scope.isLoading = false;
  var totalItems = 0, itemsLoaded = 0;

  $scope.loadNextPage = function(){
    var noLoad = $scope.isLoading || (itemsLoaded>=totalItems && $scope.nextPageIndex !== 1);
    if(noLoad)
    return;
    $scope.isLoading = true; //can be used to show loader image in view if needed
    WebService.getContentList($scope.nextPageIndex).then(function(result){
      $scope.pageDetails =  result.data.page;
      $scope.tileArray = $scope.tileArray.concat($scope.pageDetails["content-items"]["content"]);
      $scope.nextPageIndex += 1;
      totalItems = parseInt($scope.pageDetails["total-content-items"]);
      itemsLoaded += parseInt($scope.pageDetails["page-size-returned"]);
      $scope.isLoading = false;
    }, function(error){
      $scope.isLoading = false;
      console.log("error in reading data");
    });
  }

  $scope.init = function(){
    $scope.nextPageIndex = 1;
    $scope.loadNextPage();
  };

  $scope.init();

});

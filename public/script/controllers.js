//abcnew
app.controller('NewsCtrl', function($scope, $http) {
    $scope.$on('$viewContentLoaded', function () {
    
    setInterval(function(){
        $scope.news();
    },1000);
})
$scope.news=function(){
    $scope.businessnews();
    $scope.enternews();
    $scope.healthnews();
    $scope.sciencenews();
    $scope.sportsnews();
    $scope.technews();
    $scope.topnews();
}
    $scope.businessnews=function(){
$http.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a65429315e8a4bd58644f190c2af875b").then(function (response) {
      $scope.businesslist = response.data.articles;
  });
}

$scope.topnews=function(){
    $http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=a65429315e8a4bd58644f190c2af875b").then(function (response) {
          $scope.toplist = response.data.articles;
      });
    }
$scope.enternews=function(){
    $http.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a65429315e8a4bd58644f190c2af875b").then(function (response) {
          $scope.enternewslist = response.data.articles;
      });
    }
    
$scope.healthnews=function(){
    $http.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=a65429315e8a4bd58644f190c2af875b").then(function (response) {
          $scope.healthlist = response.data.articles;
      });
    }
    
$scope.sciencenews=function(){
    $http.get("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=a65429315e8a4bd58644f190c2af875b").then(function (response) {
          $scope.sciencelist = response.data.articles;
      });
    }
    $scope.sportsnews=function(){
        $http.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a65429315e8a4bd58644f190c2af875b").then(function (response) {
              $scope.sportslist = response.data.articles;
          });
        }
        
    $scope.technews=function(){
        $http.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a65429315e8a4bd58644f190c2af875b").then(function (response) {
              $scope.techlist = response.data.articles;
          });
        }
});


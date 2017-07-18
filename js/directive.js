app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);

        }
      });
    }
  }
});

app.directive('movieTile', function(AppConstants) {
  return {
    scope:{
      movieData:"="
    },
    replace:true,
    link: function(scope, element, attrs) {
      // console.log(scope.movieData);
      scope.icon = AppConstants.ROOT_FOLDER+"/images/"+ scope.movieData["poster-image"];
      scope.missingIcon = AppConstants.ROOT_FOLDER+"/images/"+ AppConstants.DUMMY_IMAGE;
      scope.name = scope.movieData.name;
    },
    templateUrl:"./partials/tile.htm"
  }
});

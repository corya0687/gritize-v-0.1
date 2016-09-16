var ProfileComponent = {
  restrict: 'E',
  templateUrl: '_profile.html',
  controller: function (Auth) {
    var ctrl = this
    Auth.currentUser().then(function (user){
      ctrl.user = user;
    });
  }
}

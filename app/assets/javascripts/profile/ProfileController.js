function ProfileController(user) {
 this.user = user
}

angular
  .module('gritize')
  .controller('ProfileController', ProfileController)

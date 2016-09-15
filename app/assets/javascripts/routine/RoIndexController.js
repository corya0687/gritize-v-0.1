function RoIndexController(routines) {
  this.routines= routines.data

}

angular
  .module('gritize')
  .controller('RoIndexController', RoIndexController)

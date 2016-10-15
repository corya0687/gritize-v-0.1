function Started() {
  return function (items) {
    var utc = new Date().toJSON().slice(0,10);

    return items.filter(function (item) {
      return item.start_date > utc
    })

  }
}



angular
  .module('gritize')
  .filter('started', Started)

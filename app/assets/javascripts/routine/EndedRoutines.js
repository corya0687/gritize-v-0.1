function PastRoutines() {
  var utc = new Date().toJSON().slice(0,10);

  return function (items, utc) {
    return items.filter(function (item) {
      return item.end_date < utc
    })
  }


}

angular
  .module('gritize')
  .filter('PastRoutines', PastRoutines)

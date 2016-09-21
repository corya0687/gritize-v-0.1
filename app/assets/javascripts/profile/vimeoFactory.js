(function () {
  'use strict';

  function VimeoFactory($http) {

    return {
      getVids: getVids,
      getVid: getVid
    }

    var req = {
      method: 'GET',
      url: 'https://api.vimeo.com/categories/motivation/videos',
      headers: {
        'Authorization': ''
      }
    }

    function getVids() {
      debugger;
      return $http.get(req)
          .then(handleResponse)
          .catch(handleError)
    }

    function getVid() {

    }

    function handleResponse(response) {
      console.log(response)
      return response.data
    }

    function handleError(error) {
      console.log(error)
    }
  }

  angular
    .module('gritize')
    .factory('VimeoFactory', VimeoFactory)

})();

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
        'Authorization': '89a05933490a8c35e7d00b19a054dd20'
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

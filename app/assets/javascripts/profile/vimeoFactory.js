(function () {
  'use strict';

  function VimeoFactory($http) {

    return {
      getVids: getVids,
      getVid: getVid
    }

    function getVids() {
      var req = {
        method: 'GET',
        url: 'https://api.vimeo.com/tags/motivation/videos',
        headers: {
          "Authorization": 'basic MzI3YWUwMTQwOTAyNWU2ZTI4OTFmNzNlNWY4MTc3ZjRiMjg0M2JkMjo5SUhscWdhdXZ1cjc0TSs5cThXQ1RjNDNzbFJvWVhxcGM1L0hwVHBEb1B0emVEQy9uUzBaWXJwVVJReFpUSGxMNEpYdm9KYnVEaEc5Rm05TUdydDd3b2ROcWVYSFQ4R0IxdVcwVkFQT3ZsRzRDRlJsaVpIbHVKdW9vRkhLcUgrcw=='
        }
      }

      return $http(req)
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

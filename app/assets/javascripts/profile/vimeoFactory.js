(function () {
  'use strict';

  function VimeoFactory($http) {

    return {
      getVid: getVid
    }


    function getVid() {
      let page = randomPage();
      var req = {
        method: 'GET',
        url: 'https://api.vimeo.com/tags/motivation/videos?page=' + page,
        headers: {
          "Authorization": 'basic MzI3YWUwMTQwOTAyNWU2ZTI4OTFmNzNlNWY4MTc3ZjRiMjg0M2JkMjo5SUhscWdhdXZ1cjc0TSs5cThXQ1RjNDNzbFJvWVhxcGM1L0hwVHBEb1B0emVEQy9uUzBaWXJwVVJReFpUSGxMNEpYdm9KYnVEaEc5Rm05TUdydDd3b2ROcWVYSFQ4R0IxdVcwVkFQT3ZsRzRDRlJsaVpIbHVKdW9vRkhLcUgrcw=='
        }
      }

      return $http(req)
          .then(handleResponse)
          .catch(handleError)
    }

    function handleResponse(response) {
      console.log(response)
      debugger;
      return randomVid(response.data)
    }

    function randomVid(vids) {
      let randomNum = Math.floor((Math.random()*25) + 1)
      debugger;
      return vids.data[randomNum]
    }

    function randomPage() {
      return Math.floor((Math.random()*100) + 1)
    }

    function handleError(error) {
      console.log(error)
    }
  }

  angular
    .module('gritize')
    .factory('VimeoFactory', VimeoFactory)

})();

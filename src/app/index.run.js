(function() {
  'use strict';

  angular
    .module('bProject')
    .run(runBlock);

  function runBlock($rootScope, $window) {
    var timeout;
    $window.addEventListener('resize', function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            $rootScope.$broadcast('window.resize');
        }, 100);
    });	
  }

})();


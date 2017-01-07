(function () {
  'use strict';

  angular
    .module('AngularStructure')
    .controller('MomentController', MomentController);

  MomentController.$inject = ['$scope', '$http', '$sce'];

  /**
   * @constructor Mais em : http://momentjs.com/
   * */
  function MomentController($scope, $http, $sce) {

	/**
	* Variables
	*/
	$scope.date = new Date();
	
	$scope.formatedDate = moment($scope.date).format("DD/MM/YYYY");
	
	$scope.formatedDate2 = moment($scope.date).format("Do MMM YY");
	
	$scope.formatedDate3 = moment().format("dddd, DD [de] MMMM [de] YYYY, hh:mm:ss a");
  
    /**
     * @description Configurações iniciais
     * */
    function init() {
		
		console.log("Hello, yes this is dog.");		
		
    }
			
    init();
  }
})();
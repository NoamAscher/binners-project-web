(function() {
    'use strict';
    angular.module('bProject').controller('UsersController', UsersController).controller('UsersEditController', UsersEditController);
    /** @ngInject */
    function UsersController(toastr, UsersService, $log, DTOptionsBuilder, DTColumnBuilder, $resource) {
        var vm = this;
        // vm.users = UsersService.GetAll().then(function(data) {
        //         return data;
        //     }, function(error) {
        //         $log.debug('error:' + error);
        //     });  
        // console.log(vm.users);

        UsersService.GetAll().then(function(data) {
            vm.users = data;
        }, function(error) {
            $log.debug('error:' + error);
        });              
        // $resource('data.json').query().$promise.then(function(persons) {
        //     vm.users = persons;
        // });              
        // vm.dtOptions = DTOptionsBuilder.newOptions()
        //     .withPaginationType('full_numbers')
        //     .withDisplayLength(2)
        //     .withDOM('pitrfl');
        // vm.dtColumnDefs = [
        //     DTColumnDefBuilder.newColumnDef(0),
        //     DTColumnDefBuilder.newColumnDef(1).notVisible(),
        //     DTColumnDefBuilder.newColumnDef(2).notSortable()
        // ]; 

        // console.log(vm.users);

        // vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        //     return $resource(vm.users).query().$promise;
        // }).withPaginationType('full_numbers');

        // vm.dtColumns = [
        //     DTColumnBuilder.newColumn('_id').withTitle('ID'),
        //     DTColumnBuilder.newColumn('email').withTitle('First name'),
        //     DTColumnBuilder.newColumn('phone').withTitle('Last name').notVisible()
        // ];    
        // vm.dtOptions = DTOptionsBuilder.newOptions()
        //     .withPaginationType('full_numbers')
        //     .withDisplayLength(2)
        //     .withDOM('pitrfl');
        // vm.dtColumnDefs = [
        //     DTColumnDefBuilder.newColumnDef(0),
        //     DTColumnDefBuilder.newColumnDef(1).notVisible(),
        //     DTColumnDefBuilder.newColumnDef(2).notSortable()
        // ];                  
    }

    function UsersEditController(toastr, UsersService, $log, $stateParams) {
        var vm = this;
        vm._id = $stateParams.id;
        UsersService.GetById(vm._id).then(function(data) {
            vm.user = data;
        }, function(error) {
            $log.debug('error:' + error);
        });
    }
})();
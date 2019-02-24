
'use strict';
export class TabComponentController {
    constructor( $state ) {
        this.stateSvc = $state
    }

    setPage( page ) {
        this.stateSvc.transitionTo( page );
        this.currentPage = page;
    }
}

angular.module('app.components')
.component('tabs', {
    templateUrl: 'components/tabs.html',
    controller:  ['$state', TabComponentController],
    bindings:    {
        nickname: "<",
        id:       "<",
        status:   "@"
    }
});
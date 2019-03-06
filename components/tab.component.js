/* Copyright (C) 2019, Team Llama: Sue Gonzales, Bruno Costa, Angela Webber, Can Bayraktarkatal, All Rights Reserved */

'use strict';
export class TabComponentController {
    constructor($state) {
        this.stateSvc = $state
    }

    setPage(page) {
        this.stateSvc.transitionTo(page);
        this.currentPage = page;
    }
}

angular.module('app.components')
    .component('tabs', {
        templateUrl: 'components/tabs.html',
        controller: ['$state', TabComponentController],
        bindings: {
            nickname: "<",
            id: "<",
            status: "@"
        }
    });
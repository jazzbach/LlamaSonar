/**
 * @name VFS AngularJS App Controller
 *
 * @copyright (C) 2014-2017 Kibble Games Inc in cooperation with Vancouver Film School.  All Rights Reserved.
 * @author Scott Henshaw
 *
 */
'use_strict';

import { app } from          './app.js';

import { LoginComponentController } from  './components/login.component.js';

export class AppController {

    constructor() {

        let my = this.__private__ = {
            id: "",
            loop: null,
        };

        // The View Model (vm) keeps clear the data the template can/should bind to
        this.vm = {
            title: "CAPTAIN SONAR"
        };
    }
}

/* -------------------------------------------------------------------------- */
// MAIN - start the whole thing off by creating the AppController
// Define the routing for the app using the UI router.

angular.module('app.controllers')
    .controller('AppController', function( $scope ) {
        return new AppController();
});

/**
 * @name VFS AngularJS Component
 *
 * @copyright (C) 2014-2017 Kibble Games Inc in cooperation with Vancouver Film School.  All Rights Reserved.
 * @author Scott Henshaw
 *
 */
'use strict';
export class LoginComponentController {

    constructor( $state, LoginService ) {
        this.stateSvc = $state
        this.vm = {
            nickname: "unknown",
            id:       0,
            master:   {},
            user:     {},
            status:   "off"
        };
        this.currentPage = 'Login';
        this.logServ = LoginService;
    }

    authenticate( user ) {
        angular.copy( user, this.vm.master );
        this.vm.nickname = this.vm.master.nickname;
        let selects = $(".select-selected");
        for(let i = 0; i < selects.length; i++){
            if($(selects[i]).parent("#role").length && user!= undefined){
                user.role = $(selects[i]).text();
            }
            if($(selects[i]).parent("#team").length && user!= undefined){
                user.team = $(selects[i]).text();
            }
        }
        if(this.checkUserFilled(user)){
            this.logServ.authenticate(user);
            this.updateScreen(user);
        }
    }

    updateScreen(user){
        let role = user.role.split(" ")[1];
        if(role == undefined) role = user.role;
        let id = user.team.substr(user.team.length - 1) + "-" + role;
        id = id.toLowerCase();
        $("#"+id).text(user.nickname);
        console.log(id);
    }

    checkUserFilled(user){
        if(!user||!user.nickname||user.team=="Choose team"||user.role=="Choose role"){
            return false;
        }else{
            return true;
        }
    }

    logoff() {
        this.user = angular.copy( this.vm.master );
        this.vm.master = {};
        this.vm.status = "off";
        this.vm.nickname = "";
        this.logServ.logout(user);
    }

    register( user ) {
    }

    setPage( page ) {
        this.stateSvc.transitionTo( page );
        this.currentPage = page;
    }
}

/*
template:
    OR
templateUrl:  The HTML bit.

bindings   Control the data binding between template variables and the controller with
            the binding attribute to the options literal

            "=" => two way data binding
            "<" => one way binding - user input into a variable
            "@" => string parameters
            "&" => callbacks to output something to the parent controller

            binding data elements are tied to $ctrl by default.
*/
angular.module('app.components', ['app.services'])
    .component('login', {
        templateUrl: 'components/login.html',
        controller:  ['$state', 'LoginService', LoginComponentController],
        bindings:    {
            nickname: "<",
            id:       "<",
            status:   "@"
        }
});
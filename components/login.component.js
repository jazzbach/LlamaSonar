/**
 * @name VFS AngularJS Component
 *
 * @copyright (C) 2014-2017 Kibble Games Inc in cooperation with Vancouver Film School.  All Rights Reserved.
 * @author Scott Henshaw
 *
 */
'use strict';
export class LoginComponentController {

    constructor( $interval, $state, $window, LoginService ) {
        this.stateSvc = $state;
        this.vm = {
            nickname: "unknown",
            id:       0,
            master:   {},
            user:     {},
            status:   "off"
        };
        this.currentPage = 'Login';
        this.logServ = LoginService;
        this.interval = $interval;
        this.interval(this.updateLobby.bind(this), 3000);
    }

    // Bruno changed (Sat Feb 23 2019 15:16)
    //Function was previously named 'authenticate'
    login( user ) {
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
            this.vm.user = user;
            //console.log(user);
            this.logServ.login(user);
            this.updateLobby();
            $("#join-btn").fadeOut();

            this.vm.status = "on";
        }
        console.log(this.vm);
    }

    updateLobby(){
        let countLoggedIn = 0;
        this.logServ.getLoggedIn().then((res) => {
            let usersLoggedIn = $.map(res, (value) => {
                return [value];
            });
            for(let i = 0; i < usersLoggedIn.length; i++){
                this.updateUser(usersLoggedIn[i]);
                if(usersLoggedIn[i].nickname!=null&&usersLoggedIn[i]!="") countLoggedIn++;
            }
            let currUserRole = this.convertRoleToText(this.vm.user.role);
            if(countLoggedIn==8) this.setPage(currUserRole);
        });
    }

    convertRoleToText(id){
        switch(id){
            case 1:
            return "Captain";
            case 2:
            return "Radio";
            case 3:
            return "FirstMate";
            case 4:
            return "Engineer";
        }
    }

    updateUser(user){
        let role = user.role.split(" ")[1];
        if(role == undefined) role = user.role;
        let id = user.team.substr(user.team.length - 1) + "-" + role;
        id = id.toLowerCase();
        $("#"+id).text(user.nickname);
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
        controller:  ['$interval', '$state', '$window', 'LoginService', LoginComponentController],
        bindings:    {
            nickname: "<",
            id:       "<",
            status:   "@"
        }
});
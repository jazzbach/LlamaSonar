/* Copyright (C) 2019, Team Llama: Sue Gonzales, Bruno Costa, Angela Webber, Can Bayraktarkatal, All Rights Reserved */

'use strict';

export class LoginServ {
    constructor($http, $q, $httpParamSerializerJQLike) {
        this.http = $http;
        this.httpParamSerializerJQLike = $httpParamSerializerJQLike;
    }

    login(user) {
        //var clientCallback = $q.defer();
        //console.log(user);

        // BRUNO !!! TESTING DATABASE CONNECTION !!!!
        user.role = this.convertRole(user.role);
        user.team = this.convertTeam(user.team);

        console.log(user);

        let params = {
            action: 'add',
            user: user
        }
        params = this.httpParamSerializerJQLike(params);

        this.http.post('server/UserDao.php', params).then((obj) => {
            //console.log(obj.data);
            return obj.data;
        });
    }

    convertRole(role) {
        switch (role) {
            case "Captain":
                return 1;
            case "First Mate":
                return 2;
            case "Radio Operator":
                return 3;
            case "First Engineer":
                return 4;
        }
    }

    convertTeam(team) {
        switch (team) {
            case "Team A":
                return 1;
            case "Team B":
                return 2;
        }
    }

    logout(user) {
        console.log(user);
        let params = {
            action: 'getAll',
            user: user
        }
        params = this.httpParamSerializerJQLike(params);

        this.http.post('server/RoleDao.php', params).then((obj) => {
            return obj.data;
        })
    }

    getLoggedIn() {
        let params = {
            action: 'getAllString'
        }
        params = this.httpParamSerializerJQLike(params);

        return this.http.post('server/UserDao.php', params).then((obj) => {
            return obj.data;
        });
    }

    startGame() {
        //once all users logged in, start game
    }
}


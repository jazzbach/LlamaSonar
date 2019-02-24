'use strict';

export class LoginServ {
    constructor($http, $q, $httpParamSerializerJQLike){
        this.http = $http;
        this.httpParamSerializerJQLike = $httpParamSerializerJQLike;
    }
    
    login( user ){
        //var clientCallback = $q.defer();
        //console.log(user);

        // BRUNO !!! TESTING DATABASE CONNECTION !!!!
        let params = {
            action:'getAllString',
            user: user
        }
        params = this.httpParamSerializerJQLike( params );

        this.http.post( 'server/UserDao.php', params ).then((obj) => {
            console.log(obj.data);
            return obj.data;
        });
    }

    logout ( user ){
        console.log(user);
        let params = {
            action: 'getAll',
            user: user
        }
        params = this.httpParamSerializerJQLike( params );

        this.http.post( 'server/RoleDao.php', params ).then((obj) => {
            return obj.data;
        })
    }

    getLoggedIn() {
        let params = {
            action:'getAllString'
        }
        params = this.httpParamSerializerJQLike( params );

        return this.http.post( 'server/UserDao.php', params ).then((obj) => {
            return obj.data;
        });
    }

    startGame () {
        //once all users logged in, start game
    }
}


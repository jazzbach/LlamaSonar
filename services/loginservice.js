'use strict';

export class LoginServ {
    constructor($http, $q, $httpParamSerializerJQLike){
        this.http = $http;
        this.httpParamSerializerJQLike = $httpParamSerializerJQLike;
    }
    
    login( user ){
        //var clientCallback = $q.defer();
        console.log(user);
        let params = {
            action:'getAll',
            user: user
        }
        params = this.httpParamSerializerJQLike( params );

        this.http.post( 'server/RoleDao.php', params ).then((obj) => {
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

    startGame () {
        //once all users logged in, start game
    }
}


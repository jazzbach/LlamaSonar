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
            //var response = JSON.parse(obj.data);
            console.log(obj.data);
        });
    }

    logout ( user ){

    }
}
//exort class
//import to app.jss
//add export class login service


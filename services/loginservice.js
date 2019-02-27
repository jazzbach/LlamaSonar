'use strict';

export class LoginServ {
    constructor($http, $q, $httpParamSerializerJQLike){
        this.http = $http;
        this.httpParamSerializerJQLike = $httpParamSerializerJQLike;
    }
    
    login( user ){
        //var clientCallback = $q.defer();
        //console.log(user);

        // // BRUNO !!! TESTING DATABASE CONNECTION !!!!
        // (Made during Scott's Pipelines class :D :D )


        
        // GET BY ID (User)
        // let params = {
        //     action:'getById',
        //     value: 4
        // }

        // GET ALL STRING (Users)
        // let params = {
        //     action:'getAllString'
        // }

        // GET ALL (Users)
        // let params = {
        //     action:'getAll'
        // }

        // REGISTER (Specific user)
		// let params = {
		// 	action:'add',
		// 	user:{
		// 		nickname: 'new name here',
		// 		role: 1, // idRole has to be this one
		// 		team: 1 // idTeam has to be this one
		// 	}
		// }
        
        // CLEAN (all logged users)
        // let params = {
        //     action:'clean'
        // }

        


        params = this.httpParamSerializerJQLike( params );

        this.http.post( 'server/UserDao.php', params ).then((obj) => {
            //console.log(obj.data);
            console.log(obj.data);
            //return obj.data;
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


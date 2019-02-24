<?php

/*
 * Class that accesses the Database and retrieves information from the
 * "User" table.
 * */

 include_once 'Connection.php';
class UserDAO {

	public function __construct() {
        if (isset($_POST["action"]) && !empty($_POST["action"])) {
            // Get the actual value from key 'action'
           $action = $_POST["action"];   // Get the action requested, make these up as needed
            //Switch case for value of action
            switch ($action) {
                
                case "getById":
                    $response = $this->getById(  intval($_POST["value"])   ); // Integer value 
                    break;
                
                case "getAllString":
                    $response = $this->getAllString();
                    break;
                
                case "getAll":
                    $response = $this->getAll();
                    break;

                case "add":
                    $response = $this->add($_POST["value"]);
                    break;

                case "update":
                    $response = $this->update($_POST["value"]);
                    break;
            }
        }

        // Bruno. Following commented code not needed. Is here only for copy and paste
        // ease of use
        // try {
        //     //$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
        //     //$pdo = new PDO($dsn, $user, $pass, $options);
        //     $pdo = Connection::getConnection();
        //     $query = 'select User.idUser as id, User.nickname, Role.role, Team.team from User
        //             inner join Role on User.idRole  = Role.idRole
        //             inner join Team on User.idTeam = Team.idTeam';
        //     $data = $pdo->query($query)->fetchAll(PDO::FETCH_UNIQUE);
        //     echo json_encode($data);
        //     // One row 
        //     //$stmt = $pdo->query($query);
        //     //$row = $stmt->fetch();
        //     //echo $row['nickname'] . "\n";
        //     // Many rows
        //     //while ($row = $stmt->fetch()){
        //     //    echo $row['nickname'] . "\n";
        //     //}
        // } catch (PDOException $ex) {
        //     //throw new PDOException($e->getMessage(), (int)$e->getCode());
        //     die(json_encode(array(' error' => $ex->getTraceAsString ()   )));
        // }
        // //echo $result;

		return 0;
    }
    
    // ----------------------------------------------------------------------------------------------------------getById
    private function getById($id){
        try {

            //$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
            //$pdo = new PDO($dsn, $user, $pass, $options);
            $db = Connection::getConnection();
            
            //$data = $pdo->query($query)->fetch(PDO::FETCH_UNIQUE);
            $statement = $db->prepare('select user.idUser as id, user.nickname, role.role, team.team from user
                    inner join role on user.idRole  = role.idRole
                    inner join team on user.idTeam = team.idTeam
                    where user.idUser=?');
            $statement->execute([$id]);
            $data = $statement->fetch();

            echo json_encode($data);


        } catch (PDOException $ex) {
            //throw new PDOException($e->getMessage(), (int)$e->getCode());
            die(json_encode(array(' error' => $ex->getTraceAsString ()   )));
        }

		return 0;
    }
    
    // -----------------------------------------------------------------------------------------------------getAllString
    private function getAllString(){
        try {

            //$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
            //$pdo = new PDO($dsn, $user, $pass, $options);
            $db = Connection::getConnection();
            
            $query = 'select user.idUser as id, user.nickname, role.role, team.team from user
                inner join role on user.idRole  = role.idRole
                inner join team on user.idTeam = team.idTeam';

            $data = $db->query($query)->fetchAll(PDO::FETCH_UNIQUE);

            echo json_encode($data);

        } catch (PDOException $ex) {
            //throw new PDOException($e->getMessage(), (int)$e->getCode());
            die(json_encode(array(' error' => $ex->getTraceAsString ()   )));
        }

        //echo $result;

		return 0;
    }

    // -----------------------------------------------------------------------------------------------------------getAll
    private function getAll(){
        try {

            $db = Connection::getConnection();
            $query = 'select * from user';
            $data = $db->query($query)->fetchAll(PDO::FETCH_UNIQUE);
            echo json_encode($data);

        } catch (PDOException $ex) {
            //throw new PDOException($e->getMessage(), (int)$e->getCode());
            die(json_encode(array(' error' => $ex->getTraceAsString ()   )));
        }

        //echo $result;

		return 0;
    }

    // --------------------------------------------------------------------------------------------------------------add
    private function add($data){
        try {
            $db = Connection::getConnection();

            $statement = $db->prepare("insert into user(idUser, nickname, idRole, idTeam)
                values ( NULL, ?, ?, ?)");

            $statement->execute([
                $data['nickname'],
                $data['idRole'],
                $data['idTeam']
            ]);
            
        }catch (PDOException $ex) {
            //throw new PDOException($e->getMessage(), (int)$e->getCode());
            die(json_encode(array(' error' => $ex->getTraceAsString ()   )));
        }
		
		return true;

    }
    
    // -----------------------------------------------------------------------------------------------------------update
    private function update($data){
        try {
            $db = Connection::getConnection();

            $statement = $db->prepare("update user set
                    nickname = ?,
                    idRole = ?,
                    idTeam = ?
                    where idUser = ?
            ");

            $statement->execute([
                $data['nickname'],
                $data['idRole'],
                $data['idTeam'],
                $data['idUser']
            ]);
            
        }catch (PDOException $ex) {
            //throw new PDOException($e->getMessage(), (int)$e->getCode());
            die(json_encode(array(' error' => $ex->getTraceAsString ()   )));
        }
		
		return true;

    }
    
    private function deleteAll(){
        try {
            $db = Connection::getConnection();

            $statement = $db->prepare("update user set
                    nickname = ?,
                    idRole = ?,
                    idTeam = ?
                    where idUser = ?
            ");

            $statement->execute([
                $data['nickname'],
                $data['idRole'],
                $data['idTeam'],
                $data['idUser']
            ]);
            
        }catch (PDOException $ex) {
            //throw new PDOException($e->getMessage(), (int)$e->getCode());
            die(json_encode(array(' error' => $ex->getTraceAsString ()   )));
        }
    }
}

// ========================================================================
//
// MAIN Handler to process POST requests
//
$ajaxPostHandler = new UserDAO();

// Bruno: Following code is useless. Is commented just for copying and pasting
// it here and there easily
// SQL READ
// One row 
//$stmt = $pdo->query($query);
//$row = $stmt->fetch();
//echo $row['nickname'] . "\n";

// Many rows
//while ($row = $stmt->fetch()){
//    echo $row['nickname'] . "\n";
//}

// *** THIS IS JUST RANDOM CODE PLACED HERE FOR EASY COPYING AND PASTING ***



/*
	$response = [];
	$response['data'] = $_POST["action"] . " FROM SERVER !!";

	echo json_encode($response);
*/

/*
// set as 'action' and if that key isn't empty ...
	if (isset($_POST["action"]) && !empty($_POST["action"])) { //Checks if action value exists

		// Get the actual value from key 'action'
		$action = $_POST["action"];   // Get the action requested, make these up as needed

		switch ($action) {     //Switch case for value of action
			case "save":
				$response = $this->do_submit($_POST);
*/
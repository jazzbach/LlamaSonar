<?php

/* Copyright (C) 2019, Team Llama: Sue Gonzales, Bruno Costa, Angela Webber, Can Bayraktarkatal, All Rights Reserved */

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
                    $response = $this->add($_POST["user"]);
                    break;

                case "clean":
                    $response = $this->clean();
                    break;
            }
        }

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

    // ---------------------------------------------------------------------------------------------------------register
    private function add($data){
        echo $data;
        try {
            $db = Connection::getConnection();

            $statement = $db->prepare("update user set
                    nickname = ?
                    where idRole = ? and idTeam = ?
            ");

            $statement->execute([
                $data['nickname'],
                $data['role'],
                $data['team'],
            ]);
            
        }catch (PDOException $ex) {
            //throw new PDOException($e->getMessage(), (int)$e->getCode());
            die(json_encode(array(' error' => $ex->getTraceAsString ()   )));
        }
		
		return true;

    }

    // ------------------------------------------------------------------------------------------------------------clean
    private function clean(){
        try {
            $db = Connection::getConnection();

            $statement = $db->prepare("update user set nickname = ''");

            $statement->execute();
            
        }catch (PDOException $ex) {
            //throw new PDOException($e->getMessage(), (int)$e->getCode());
            die(json_encode(array(' error' => $ex->getTraceAsString ()   )));
        }
		
		return true;
    }

}

// ========================================================================
//
// MAIN Handler to process POST requests
//
$ajaxPostHandler = new UserDAO();
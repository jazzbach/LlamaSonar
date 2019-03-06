<?php

/* Copyright (C) 2019, Team Llama: Sue Gonzales, Bruno Costa, Angela Webber, Can Bayraktarkatal, All Rights Reserved */

/*
 * Class that accesses the Database and retrieves information from the
 * "Team" table.
 * */

 include_once 'Connection.php';
class TeamDAO {

	public function __construct() {
        
        //Checks if action value exists
        if (isset($_POST["action"]) && !empty($_POST["action"])) {
            // Get the actual value from key 'action'
            $action = $_POST["action"];   // Get the action requested, make these up as needed

            //Switch case for value of action
            switch ($action) {
                
                case "getById":
                    $response = $this->getById(  intval($_POST["value"])   ); // Integer value 
                    break;
                
                case "getAll":
                    $response = $this->getAll();
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
            $statement = $db->prepare("select * from Team where idTeam=?");
            $statement->execute([$id]);
            $data = $statement->fetch();

            echo json_encode($data);


        } catch (PDOException $ex) {
            //throw new PDOException($e->getMessage(), (int)$e->getCode());
            die(json_encode(array(' error' => $ex->getTraceAsString ()   )));
        }

		return 0;
    }

    // -----------------------------------------------------------------------------------------------------------getAll
    private function getAll(){
        try {

            //$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
            //$pdo = new PDO($dsn, $user, $pass, $options);
            $db = Connection::getConnection();
            
            $query = 'select * from Team';
            $data = $db->query($query)->fetchAll(PDO::FETCH_UNIQUE);
            echo json_encode($data);


        } catch (PDOException $ex) {
            //throw new PDOException($e->getMessage(), (int)$e->getCode());
            die(json_encode(array(' error' => $ex->getTraceAsString ()   )));
        }

		return 0;
    }
}

// ========================================================================
//
// MAIN Handler to process POST requests
//
$ajaxPostHandler = new TeamDAO();
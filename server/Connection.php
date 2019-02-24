<?php

/*
 * This class represent the connection for the database.
 * 
 * The connection is separated from the queries in order to avoid
 * having to create a new connection everytime theres a query
 * 
 * Note that this class has both, its contructor and its cloner
 * as private, meaning that the whole class is "static"
 * */

//Set The default time zone
date_default_timezone_set ("US/Pacific");
class Connection {

    private static $pdoConnection; // stores the MySQL pdoConnection
    private static $host = '127.0.0.1:3306'; // pgwm.vfs.local:3306
    private static $db   = 'sonardb';
    private static $charset = 'utf8';
    private static $user = 'root';
    private static $pass = 'toor';
    private static $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];

    // Private constructor and cloner !!!!!
    // No way for this object to be instantiated from outside
	private function __construct() {} 
	private function __clone() {}

    // Returns a connection to the database.
    // If no connection exists, it'll return a new one
    // If a previous connections exists, it'll return the existing one.
	public static function getConnection() {

        // create the pdoConnection if it does not exist
		if(!isset(self::$pdoConnection)) {

			try{
                $dsn = 'mysql:host='.Connection::$host.';dbname='.Connection::$db.';charset='.Connection::$charset;
                self::$pdoConnection = new PDO($dsn, Connection::$user, Connection::$pass, Connection::$options);
                
			}catch (PDOException $ex) {
                
                //die(json_encode(array('ERROR' => $ex->getTraceAsString ()   )));
                throw new PDOException($ex->getMessage(), (int)$ex->getCode());
            }
		}
		// return the pdoConnection
		return self::$pdoConnection;
	}
}
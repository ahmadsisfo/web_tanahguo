<?php
class DBConnect
{
public $host;
public $user;
public $pass;
public $port;
public $perintah;
public $database;
public $koneksi;

	function __construct(){
		$this->host="localhost";
		$this->user="postgres";
		$this->pass="1";
		$this->port="5432";
		$this->database="budaya";
		
		$this->koneksi=pg_connect("host=$this->host port=$this->port dbname=$this->database user=$this->user password=$this->pass");
		if(!$this->koneksi){
			echo "Koneksi gagal";
			exit();
		}
	}
	public function GetKategori(){
		
	}
}

header("content-type: application/json");
$db = new DBConnect();
$db->GetKategori();

?>


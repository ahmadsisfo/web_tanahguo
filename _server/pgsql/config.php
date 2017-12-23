<?php
$host="localhost";
$user="postgres";
$password="1";
$port="5432";
$dbname="workshop";
 
$link= pg_connect("host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$password) or die("Koneksi gagal");
header('Access-Control-Allow-Origin: *');
?>
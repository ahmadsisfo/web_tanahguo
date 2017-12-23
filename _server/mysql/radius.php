<?php
error_reporting(0);
include("mysql_connect.php");
$lat = $_GET["lat"];
$lng = $_GET["lng"];
$radius = $_GET["rad"];
$id = $_GET["id"];

//$lat = -0.874777;
//$lng = 100.430314;
//$radius = 7;
//$id = "T06";
$kode = substr($id,0,1);

if($kode=="T"){
   $query="SELECT *,( 6371 * acos( cos( radians({$lat}) ) * cos( radians( data.st_Y ) ) * cos( radians( data.st_X ) - radians({$lng}) ) + sin( radians({$lat}) ) * sin( radians( data.st_Y ) ) ) ) AS distance
   FROM tipe,jenis,data HAVING distance <= {$radius} AND tipe.id=jenis.id_tipe AND data.id_jenis=jenis.id AND jenis.id_tipe='$id'";
}else if($kode=="J"){
   $query="SELECT *,( 6371 * acos( cos( radians({$lat}) ) * cos( radians( `st_Y` ) ) * cos( radians( `st_X` ) - radians({$lng}) ) + sin( radians({$lat}) ) * sin( radians( `st_Y` ) ) ) ) AS distance
   FROM `data` HAVING distance <= {$radius} AND id_jenis='$id' ORDER BY distance ASC";
}else{
   $query="SELECT *,( 6371 * acos( cos( radians({$lat}) ) * cos( radians( `st_Y` ) ) * cos( radians( `st_X` ) - radians({$lng}) ) + sin( radians({$lat}) ) * sin( radians( `st_Y` ) ) ) ) AS distance
   FROM `data` HAVING distance <= {$radius} ORDER BY distance ASC";
}


$hasil=mysqli_query($connect, $query);
while($r=mysqli_fetch_array($hasil))
{
   $arr[] = $r;
}
   echo '{"items":'. json_encode($arr).'}';
?>
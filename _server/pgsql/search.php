<?php 
include('DBconnect.php');
error_reporting(0);

$cari="";
$cari=$_GET['cari'];

$ketemu=false;


$select1 = mysql_query("SELECT * FROM gonjong WHERE nama LIKE '%".$cari."%'  ");
while($r=mysql_fetch_array($select1))
{
	$arr[] = $r;
}


echo '{"items":'. json_encode($arr).'}';
?> 
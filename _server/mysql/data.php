<?php
include('mysql_connect.php');
$id_jenis = $_GET["id_jenis"];

$query="select id, nama from data where id_jenis='$id_jenis'"; 
$hasil=mysqli_query($connect, $query);

while($r=mysqli_fetch_row($hasil))
{
   $arr[] = $r;
}
   echo json_encode($arr);
?>
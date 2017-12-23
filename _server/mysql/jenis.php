<?php
include('mysql_connect.php');
$id_tipe = $_GET["id_tipe"];

$query="select id, nama from jenis where id_tipe='$id_tipe'"; 
$hasil=mysqli_query($connect, $query);

while($r=mysqli_fetch_array($hasil))
{
   $arr[] = $r;
}
echo json_encode($arr);
?>
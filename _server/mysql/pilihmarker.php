<?php
include('mysql_connect.php');
$id = $_GET["id"];

$query="select* from data where id='$id'"; 
$hasil=mysqli_query($connect, $query);

while($r=mysqli_fetch_array($hasil))
{
   $arr[] = $r;
}
   echo json_encode($arr);
?>
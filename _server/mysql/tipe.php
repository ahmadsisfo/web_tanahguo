<?php
require("mysql_connect.php");
$query="select id,nama from tipe"; 
$hasil=mysqli_query($connect, $query);

while($r=mysqli_fetch_array($hasil))
{
   //$load=$data;
   //$tulis="loaddata(".$hasil.");";
   $arr[] = $r;
}
   echo json_encode($arr);
?>
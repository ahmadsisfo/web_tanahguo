<?php
require("pgsql_connect.php");
//$caritext = $_GET["idjenis"];

$querysearch="select id_tipe,tipe from tipe"; 
$hasil=pg_query($querysearch);

while($r=pg_fetch_array($hasil))
{
   include('mysql_connect.php');
   //echo$r['nama'];
   echo$r['tipe']=str_replace("'","''",$r['tipe']);
   
   $query=mysql_query("insert into tipe values('".$r['id_tipe']."','".$r['tipe']."')") or die(mysql_error());
   if($query)echo"berhasil";
   
   //$r['id'];
   //$load=$data;
   $tulis="loaddata(".$hasil.");";
   $arr[] = $r;
}
   //echo json_encode($arr);
?>
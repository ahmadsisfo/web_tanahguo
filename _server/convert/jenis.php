<?php
require("pgsql_connect.php");
//$caritext = $_GET["idjenis"];

$querysearch="select id_jenis,jenis,id_tipe from jenis"; 
$hasil=pg_query($querysearch);

while($r=pg_fetch_array($hasil))
{
   include('mysql_connect.php');
   //echo$r['nama'];
   //echo$r['nama']=str_replace("'","''",$r['nama']);
   
   $query=mysql_query("insert into jenis values('".$r['id_jenis']."','".$r['jenis']."','".$r['id_tipe']."')") or die(mysql_error());
   if($query)echo"berhasil";
   
   //$r['id'];
   //$load=$data;
   $tulis="loaddata(".$hasil.");";
   $arr[] = $r;
}
   //echo json_encode($arr);
?>
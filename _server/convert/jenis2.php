<?php
require("mysql_connect1.php");
//$caritext = $_GET["idjenis"];

$querysearch="select id,kategori from kategori"; 
$hasil=mysql_query($querysearch);
$no=22;
while($r=mysql_fetch_array($hasil))
{
   include('mysql_connect.php');
   //echo$r['nama'];
   //echo$r['nama']=str_replace("'","''",$r['nama']);
   
   $query=mysql_query("insert into jenis values('J".$no."','".$r['kategori']."','T06')") or die(mysql_error());
   if($query)echo"berhasil";
   
   //$r['id'];
   //$load=$data;
   $tulis="loaddata(".$hasil.");";
   $arr[] = $r;
   $no++;
}
   //echo json_encode($arr);
?>
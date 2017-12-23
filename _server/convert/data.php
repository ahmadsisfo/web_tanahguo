<?php
require("pgsql_connect.php");
//$caritext = $_GET["idjenis"];

$querysearch="select id,nama, alamat,deskripsi, st_X(the_geom),st_Y(the_geom),id_jenis from data where id='81'"; 
$hasil=pg_query($querysearch);

while($r=pg_fetch_array($hasil))
{
   include('mysql_connect.php');
   echo$r['nama'];
   echo$r['nama']=str_replace("'","''",$r['nama']);
   
   $query=mysql_query("insert into data values('".$r['id']."','".$r['nama']."','".$r['alamat']."','".$r['deskripsi']."','".$r['st_x']."','".$r['st_y']."','".$r['id_jenis']."')") or die(mysql_error());
   if($query)echo"berhasil";
   $r['id'];
   //$load=$data;
   $tulis="loaddata(".$hasil.");";
   $arr[] = $r;
}
   //echo json_encode($arr);
?>
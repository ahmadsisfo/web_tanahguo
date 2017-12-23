<?php
error_reporting(0);
include('mysql_connect.php');
$id = $_GET["id"];
$kode = substr($id,0,1);

if($kode=="T"){
   $query="select data.id,data.nama,data.alamat,data.deskripsi,data.st_X,data.st_Y from data,tipe,jenis where tipe.id=jenis.id_tipe and data.id_jenis=jenis.id and jenis.id_tipe='$id'"; 
}else if($kode=="J"){
   $query="select* from data where id_jenis='$id'"; 
}else{
   $query="select* from data";
}
$hasil=mysqli_query($connect, $query);

while($r=mysqli_fetch_array($hasil))
{
   $arr[] = $r;
}
   echo json_encode($arr);
?>
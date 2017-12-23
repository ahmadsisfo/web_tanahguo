<?php
require("mysql_connect1.php");
//$caritext = $_GET["idjenis"];

$querysearch="select id,nama, alamat,deskripsi, x,y,id_kategori from objek"; 
$hasil=mysql_query($querysearch);
$no=175;
while($r=mysql_fetch_array($hasil))
{
   include('mysql_connect.php');
   if($r['id_kategori']=="1"){
      $r['id_kategori']="J22";
   }else if($r['id_kategori']=="2"){
      $r['id_kategori']="J23";
   }else if($r['id_kategori']=="3"){
      $r['id_kategori']="J24";
   }else if($r['id_kategori']=="4"){
      $r['id_kategori']="J25";
   }else if($r['id_kategori']=="5"){
      $r['id_kategori']="J26";
   }else if($r['id_kategori']=="6"){
      $r['id_kategori']="J27";
   }else if($r['id_kategori']=="7"){
      $r['id_kategori']="J28";
   }
   $r['nama']=str_replace("'","''",$r['nama']);
   
   $query=mysql_query("insert into data values('$no','".$r['nama']."','".$r['alamat']."','".$r['deskripsi']."','".$r['x']."','".$r['y']."','".$r['id_kategori']."')") or die(mysql_error());
   if($query)echo"berhasil";
   //$r['id'];
   //$load=$data;
   //$tulis="loaddata(".$hasil.");";
   $arr[] = $r;
   $no++;
}
   //echo json_encode($arr);
?>
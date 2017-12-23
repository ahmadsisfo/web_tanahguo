<?php 
include('DBconnect.php');
$kategori=$_GET['kategori'];
$perintah = pg_query("select * from objek where id_kategori='$kategori'");
while($r=pg_fetch_array($perintah))
{
	$arr[] = $r;
}
echo json_encode($arr);
?> 
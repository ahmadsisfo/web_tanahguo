<?php 
include('DBconnect.php');
$perintah = pg_query("select * from kategori");
while($r=pg_fetch_array($perintah))
{
	$arr[] = $r;
}
echo json_encode($arr);
?> 
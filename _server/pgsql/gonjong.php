<?php 
include('DBconnect.php');
$perintah = mysql_query("select * from gonjong");
while($r=mysql_fetch_array($perintah))
{
	$arr[] = $r;
}
echo '{"items":'. json_encode($arr).'}';
?> 
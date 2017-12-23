<?php
include ('config.php');
$dataarray=array();

$sql=pg_query("select * from tipe");
			
while($row = pg_fetch_array($sql))
	{
		  $data=$row['tipe'];
		  $dataarray[]=$data;
	}
echo json_encode ($dataarray);
   

					  
?>
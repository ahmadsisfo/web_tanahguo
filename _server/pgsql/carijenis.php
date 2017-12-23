<?php
include ('config.php');
					
$tipe=$_GET["tipe"];
//$sql=pg_query("select * from jenis");
$sql=pg_query("select id_jenis,jenis from tipe,jenis where jenis.id_tipe=tipe.id_tipe AND tipe='$tipe'");
$dataarray=array();
			
while($row = pg_fetch_array($sql))
  {
	 $dataidjenis=$row['id_jenis'];
	 $datajenis=$row['jenis'];
	 $dataarray[]=array('id_jenis'=>$dataidjenis,'jenis'=>$datajenis);
  }
  echo json_encode ($dataarray);
					  
?>
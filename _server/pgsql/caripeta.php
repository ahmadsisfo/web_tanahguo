<?php
require("config.php");
$caritext = $_GET["idjenis"];

$querysearch="SELECT row_to_json(fc) FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM (SELECT 'Feature' As type , ST_AsGeoJSON(loc.the_geom)::json As geometry , row_to_json((SELECT l FROM (SELECT id,nama,alamat,deskripsi,image,id_jenis) As l )) As properties FROM data As loc WHERE id_jenis='$caritext') As f ) As fc"; 

$hasil=pg_query($querysearch);
  while($data=pg_fetch_array($hasil))
	 {
	  $load=$data['row_to_json'];
	  $tulis="loaddata(".$load.");";
	  }
	echo $tulis;
		

?>
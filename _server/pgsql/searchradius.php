<?php
include("config.php");
$latitude = $_GET["lat"];
$longitude = $_GET["lng"];
$radius = $_GET["radius"];
$jenis = $_GET["jenis"];
$querysearch="SELECT row_to_json(fc)
 FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
 FROM (SELECT 'Feature' As type
    , ST_AsGeoJSON(loc.the_geom)::json As geometry
    , row_to_json((SELECT l FROM (SELECT id, id_jenis, nama, alamat, deskripsi, image) As l
      )) As properties
   FROM data As loc 
   WHERE ST_Distance_Sphere(the_geom, ST_MakePoint($longitude,$latitude)) <= $radius *1000 AND id_jenis='$jenis'
  ) As f )  As fc;";
  
$hasil=pg_query($querysearch);
  while($data=pg_fetch_array($hasil))
 	 {
	  $load=$data['row_to_json'];
	  $tulis="loaddata(".$load.");";
	  }
	
	 
	echo $tulis;
?>
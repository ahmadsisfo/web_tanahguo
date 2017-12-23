<?php
include('DBconnect.php');
$delete=pg_query("delete from kategori");
$insert=pg_query("INSERT INTO kategori (id,kategori)VALUES 
('1','Bangunan Gonjong'),
('2','Tarian'),
('3','Alat Musik'),
('4','Makanan Khas'),
('5','Rabab'),
('6','Saluang'),
('7','Pakaian Adat')");

if($insert)echo'berhasil';
else echo'gagal';
?>


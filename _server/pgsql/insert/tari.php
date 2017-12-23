<?php
include('DBconnect.php');
$delete=pg_query("delete from tari");
$insert=pg_query("INSERT INTO tari (id,nama,deskripsi,alamat,image,y,x,id_kategori) values 
('1','Tari Pasambahan','Sanggar Tari Syofyani','Jl. Nuri No. 6 Air Tawar','{}','-0.90028','100.35004','2'),
('2','Tari Piring','Sanggar Tari Tuah Saiyo','Jl. Batang Tarusan Dalam No 6 a Padang Baru Timur','{}','-0.92811','100.36446','2'),
('3','Tari Alang Babega','Sanggar Satampang Baniah','Anduriang','{}','-0.93576','100.38899','2'),
('4','Tari Pasambahan','Bundo Kanduang','Tarandam','{}','-0.95195','100.36863','2'),
('5','Tari Payung','Sanggar Pelangi Ranah Minang','Jl. Jaya Putra No M1/12 Wisma Indah IV Siteba','{}','-0.89539','100.36945','2'),
('6','Tari Piring','Sanggar Tari Cahayo Bundo','Sawahan','{}','-0.94492','100.37032','2'),
('7','Taman Budaya','Tempat Panggung Seni Tari','Jl.Robert Wolter Mongonsidi','{}','-0.95482','100.35442','2')
");
if($insert)echo'berhasil';
else echo'gagal';
?>




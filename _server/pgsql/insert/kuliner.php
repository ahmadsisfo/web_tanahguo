<?php
include('DBconnect.php');
$delete=pg_query("delete from kuliner");
$insert=pg_query("INSERT INTO kuliner (id,nama,deskripsi,alamat,image,y,x,id_kategori) VALUES 
('1','Tambunsu Talua','Rumah Makan Kapau HAMKA','jl. Hamka 23-A Padang 0751-446597','{}','-0.888376','100.3518','4'),
('2','Dendeng Batokok','Nasi Kapau Spesifik','jl. Cendrawasih 4 Padang 0751 7057270','{}','-0.888827','100.349953','4'),
('3','Randang','Rumah Makan Pak Datuk','Jl. Sutan Syahrir 197 Padang 0751 83464','{}','-0.970184','100.378548','4'),
('4','Gulai Tunjang','Rumah Makan Pak Sidi','Jl. Sutan Syahrir 351 Padang','{}','-0.970355','100.377689','4'),
('5','Gulai Lauak Pasia','Rumah Makan Pauh Piaman','Jl. Khatib Sulaiman 65 Padang','{}','-0.916611','100.359997','4'),
('6','Rendang','Rumah Makan Salero Baru','Jl. Adinegoro Padang','{}','-0.808498','100.327438','4'),
('7','Rendang','Restoran Simpang Raya','Jl. Bagindo Azis Chan 24 Padang','{}','-0.951347','100.364202','4'),
('8','Rendang','Rumah Makan Singgalang','jl. Khatib Sulaiman 65 Padang','{}','-0.916654','100.359847','4')
");


if($insert)echo'berhasil';
else echo'gagal';
?>



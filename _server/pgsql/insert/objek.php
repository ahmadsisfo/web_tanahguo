<?php
include('DBconnect.php');
$delete=pg_query("delete from objek");
$insert=pg_query("INSERT INTO objek (id,nama,deskripsi,alamat,image,y,x,id_kategori) VALUES 
('1','Tambunsu Talua','Rumah Makan Kapau HAMKA','jl. Hamka 23-A Padang 0751-446597','{}','-0.888376','100.3518','4'),
('2','Dendeng Batokok','Nasi Kapau Spesifik','jl. Cendrawasih 4 Padang 0751 7057270','{}','-0.888827','100.349953','4'),
('3','Randang','Rumah Makan Pak Datuk','Jl. Sutan Syahrir 197 Padang 0751 83464','{}','-0.970184','100.378548','4'),
('4','Gulai Tunjang','Rumah Makan Pak Sidi','Jl. Sutan Syahrir 351 Padang','{}','-0.970355','100.377689','4'),
('5','Gulai Lauak Pasia','Rumah Makan Pauh Piaman','Jl. Khatib Sulaiman 65 Padang','{}','-0.916611','100.359997','4'),
('6','Rendang','Rumah Makan Salero Baru','Jl. Adinegoro Padang','{}','-0.808498','100.327438','4'),
('7','Rendang','Restoran Simpang Raya','Jl. Bagindo Azis Chan 24 Padang','{}','-0.951347','100.364202','4'),
('8','Rendang','Rumah Makan Singgalang','jl. Khatib Sulaiman 65 Padang','{}','-0.916654','100.359847','4'),
('9','BANK INDONESIA','Melayani nasabah','Jl. Jend Sudirman','{1.jpg}','-0.94299','100.362622','1'),
('10','BRAVO TOURS','Wisata Perjalanan','Jalan Proklamasi','{2.jpg}','-0.951363','100.365262','1'),
('11','DINAS PETERNAKAN','Mengelola dan  memantau ','Jalan Rasuna Said','{3.jpg}','-0.931817','100.361748','1'),
('12','DPRD SUMBAR','Tempat pemerintahan','Jalan Khatib Sulaiman','{4.jpg}','-0.906801','100.351824','1'),
('13','STADION GOR','Lapangan Bola Internasional','Jl. Batang Pasaman','{5.jpg}','-0.929253','100.358921','1'),
('14','GED PERTEMUAN POLDA','Balai Pertemuan','Jalan Ir. Haji Juanda','{6.jpg}','-0.924485','100.351561','1'),
('15','KANTOR GUBERNUR','Gubernur SUMBAR','Jl. Jend Sudirman','{7.jpg}','-0.937578','100.360466','1'),
('16','KOMITE OLAHRG NASIONAL INDONESIA','Memantau dan Mengelola kegiatan dibidang Olahraga','Jl. Hasanudin','{8.jpg}','-0.951883','100.364350','1'),
('17','MASJID RAYA SUMBAR','Ibadah bagi muslim','Jalan Khatib Sulaiman','{9.jpg}','-0.925354','100.361678','1'),
('18','MUSEUM GEMPA DAN BENCANA','Museum Bersejarah gempa SUMBAR','Jl.Robert Wolter Mongonsidi','{10.jpg}','-0.953347','100.355708','1'),
('19','PLAZA TELKOM','Tempat Pembayaran Telepon Rumah ','Kyai Haji Ahmad Dahlan','{11.jpg}','-0.926255','100.362166','1'),
('20','DINAS PENDIDIKAN','memantau dan mengelola pendidikan','Jl. Jend Sudirman','{12.jpg}','-0.93459','100.361952','1'),
('21','SENDIK BRI','Central pendidikan kota Padang','JL. Dr Hatta','{13.jpg}','-0.928712','100.428313','1'),
('22','TAMAN BUDAYA','Tempat Pertunjukan ','Jl.Robert Wolter Mongonsidi','{14.jpg}','-0.954667','100.355085','1'),
('23','VAMELANIA','Loundry','JL. Dr Hatta','{15.jpg}','-0.930031','100.421861','1'),
('24','Tari Pasambahan','Sanggar Tari Syofyani','Jl. Nuri No. 6 Air Tawar','{}','-0.90028','100.35004','2'),
('25','Tari Piring','Sanggar Tari Tuah Saiyo','Jl. Batang Tarusan Dalam No 6 a Padang Baru Timur','{}','-0.92811','100.36446','2'),
('26','Tari Alang Babega','Sanggar Satampang Baniah','Anduriang','{}','-0.93576','100.38899','2'),
('27','Tari Pasambahan','Bundo Kanduang','Tarandam','{}','-0.95195','100.36863','2'),
('28','Tari Payung','Sanggar Pelangi Ranah Minang','Jl. Jaya Putra No M1/12 Wisma Indah IV Siteba','{}','-0.89539','100.36945','2'),
('29','Tari Piring','Sanggar Tari Cahayo Bundo','Sawahan','{}','-0.94492','100.37032','2'),
('30','Taman Budaya','Tempat Panggung Seni Tari','Jl.Robert Wolter Mongonsidi','{}','-0.95482','100.35442','2')
");


if($insert)echo'berhasil';
else echo'gagal';
?>



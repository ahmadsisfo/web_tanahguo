<?php
include('mysql_connect.php');

$query="INSERT INTO `data` (`id`,`nama`,`alamat`,`deskripsi`,`st_y`,`st_x`,`id_jenis`) VALUES 
('205','Lubuk Tampurung','kel. Kuranji, Kota Padang','salah satu pariwisata kota padang, panorama dan air terjun','-0.866256','100.430954','J20'),
('206','Lubuk Tampurung','kel. Kuranji, Kota Padang','salah satu pariwisata kota padang, panorama dan air terjun','-0.865956','100.431172','J14'),
('207','Universitas Andalas','Jl. dr. Hatta','Salah satu Kampus Negeri di kota Padang','-0.912513','100.460647','J29'),
('208','Universitas Baiturrahmah','Jl. Bypass','Kampus swasta yayasan Baiturrahamh','-0.870719','100.383962','J29'),
('209','Universitas Negeri Padang','Jalan Professor Doktor Hamka, Padang, Kota Padang, Sumatera Barat 25171, Indonesia','Salah satu Kampus Negeri di kota Padang','-0.898525','100.349216','J29'),
('230','Kantor Walikota Padang Baru','Jl. Bypass','Sedang Persiapan,Belum Beroperasi','-0.878427','100.388291','J31')
"; 
$hasil=mysql_query($query) or die(mysql_error());
if($hasil){
echo"berhasil";
}else{echo"gagal";}
?>
<?php
include('DBconnect.php');
/*$create = pg_query("CREATE TABLE IF NOT EXISTS gonjong
(
  id character varying(10) NOT NULL,
  the_geom geometry,
  nama character varying(50),
  alamat character varying(100),
  deskripsi character varying(2000),
  image character varying[],
  id_jenis character varying(4),
  x character varying(50),
  y character varying(50),
  CONSTRAINT gonjong_pk PRIMARY KEY (id )
)
WITH (
  OIDS=FALSE
);
ALTER TABLE gonjong
  OWNER TO postgres;

-- Index: fki_gonjong_fkey2

-- DROP INDEX fki_gonjong_fkey2;

CREATE INDEX fki_gonjong_fkey2
  ON gonjong
  USING btree
  (id_jenis COLLATE pg_catalog."default" );");
*/

$delete = pg_query("delete from gonjong");
$insert = pg_query("INSERT INTO gonjong (id,nama,deskripsi,alamat,image,y,x,id_kategori) values 
('1','BANK INDONESIA','Melayani nasabah','Jl. Jend Sudirman','{1.jpg}','-0.94299','100.362622','1'),
('2','BRAVO TOURS','Wisata Perjalanan','Jalan Proklamasi','{2.jpg}','-0.951363','100.365262','1'),
('3','DINAS PETERNAKAN','Mengelola dan  memantau ','Jalan Rasuna Said','{3.jpg}','-0.931817','100.361748','1'),
('4','DPRD SUMBAR','Tempat pemerintahan','Jalan Khatib Sulaiman','{4.jpg}','-0.906801','100.351824','1'),
('5','STADION GOR','Lapangan Bola Internasional','Jl. Batang Pasaman','{5.jpg}','-0.929253','100.358921','1'),
('6','GED PERTEMUAN POLDA','Balai Pertemuan','Jalan Ir. Haji Juanda','{6.jpg}','-0.924485','100.351561','1'),
('7','KANTOR GUBERNUR','Gubernur SUMBAR','Jl. Jend Sudirman','{7.jpg}','-0.937578','100.360466','1'),
('8','KOMITE OLAHRG NASIONAL INDONESIA','Memantau dan Mengelola kegiatan dibidang Olahraga','Jl. Hasanudin','{8.jpg}','-0.951883','100.364350','1'),
('9','MASJID RAYA SUMBAR','Ibadah bagi muslim','Jalan Khatib Sulaiman','{9.jpg}','-0.925354','100.361678','1'),
('10','MUSEUM GEMPA DAN BENCANA','Museum Bersejarah gempa SUMBAR','Jl.Robert Wolter Mongonsidi','{10.jpg}','-0.953347','100.355708','1'),
('11','PLAZA TELKOM','Tempat Pembayaran Telepon Rumah ','Kyai Haji Ahmad Dahlan','{11.jpg}','-0.926255','100.362166','1'),
('12','DINAS PENDIDIKAN','memantau dan mengelola pendidikan','Jl. Jend Sudirman','{12.jpg}','-0.93459','100.361952','1'),
('13','SENDIK BRI','Central pendidikan kota Padang','JL. Dr Hatta','{13.jpg}','-0.928712','100.428313','1'),
('14','TAMAN BUDAYA','Tempat Pertunjukan ','Jl.Robert Wolter Mongonsidi','{14.jpg}','-0.954667','100.355085','1'),
('15','VAMELANIA','Loundry','JL. Dr Hatta','{15.jpg}','-0.930031','100.421861','1')
");
if($insert) echo'berhasil';
else echo'gagal';
?>


-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 26, 2014 at 11:51 AM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tanah`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE IF NOT EXISTS `data` (
  `id` varchar(4) NOT NULL,
  `nama` varchar(50) DEFAULT NULL,
  `alamat` varchar(100) DEFAULT NULL,
  `deskripsi` varchar(2000) DEFAULT NULL,
  `st_X` varchar(50) DEFAULT NULL,
  `st_Y` varchar(50) DEFAULT NULL,
  `id_jenis` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`id`, `nama`, `alamat`, `deskripsi`, `st_X`, `st_Y`, `id_jenis`) VALUES
('104', 'RSB Ananda', 'Jl. Bandar Purus No 29 Padang', '', '100.356572', '-0.940305', 'J05'),
('113', 'RSB Tiara Anggrek', 'Jl. Adinegoro No 27 Padang, tabing', '', '100.331984', '-0.8459', 'J05'),
('114', 'RS Lanud Padang', 'Jl. Adinegoro-Komp. Tni Au', '', '100.35128', '-0.884995', 'J05'),
('115', 'Klinik Anisa Medical Centre', 'JL. Prof. DR. Hamka No. 31 C', '', '100.351827', '-0.889452', 'J05'),
('116', 'christine hakim', 'pondok', '', '100.357146263123', '-0.962867711742279', 'J06'),
('117', 'Craft Center', 'Khatib', '', '100.3589212', '-0.914606', 'J06'),
('118', 'Mahkota', '-', '', '100.350634', '-0.8837738', 'J06'),
('119', 'Shirley', '-', '', '100.3564913', '-0.9581466', 'J06'),
('120', 'Uwan', '-', '', '100.3493333', '-0.8815802', 'J06'),
('121', 'Silungkang', '-', '', '100.3629323', '-0.943897', 'J06'),
('122', 'Oma', '-', '', '100.3507152', '-0.8918445', 'J06'),
('124', 'pasar simpang haru', 'jln Dr Sutomo', '', '100.375814', '-0.943768', 'J07'),
('125', 'pasar ikan gaung', 'Gaung Teluk Bayur', '', '100.383575', '-0.992454', 'J07'),
('126', 'pasar lubuk buaya', 'jln Adinegoro', '', '100.328468', '-0.831842', 'J07'),
('127', 'pasar siteba', 'jln Raya Siteba , Nanggalo', '', '100.368684', '-0.897066', 'J07'),
('128', 'pasar raya fase I', 'Pasar Raya Fase 1', '', '100.359322', '-0.9483', 'J07'),
('129', 'pasar ulak karang', 'jalan S .parman', '', '100.349966', '-0.911569', 'J07'),
('13', 'IKARSA', 'JL.SPARMAN NO.168 PADANG', '', '100.3507', '-0.915598', 'J01'),
('130', 'pasar Alai', 'jalan gajah mada', '', '100.366538', '-0.923927', 'J07'),
('132', 'Plaza Andalas', 'Jl. Pemuda', '', '100.355325', '-0.950521', 'J08'),
('134', 'Sentra Pasar Raya Padang', 'Jalan M. Yamin, Padang Barat', '', '100.360726', '-0.951003', 'J07'),
('14', 'PT.FITOUR UTAMA', 'JL.SPARMAN  PADANG', '', '100.35073', '-0.91531', 'J01'),
('15', 'PT.SERUNAI', 'JL.SPARMAN NO PADANG', '', '100.352', '-0.91955', 'J01'),
('154', 'asuransi bsam', 'jln.veteran', '', '100.3556462', '-0.9405742', 'J10'),
('155', 'takaful ullum', 'jln.veteran', '', '100.3556462', '-0.9405742', 'J10'),
('157', 'erny salon & boutique', 'jln.veteran no.37', '', '100.3555753', '-0.9407197', 'J11'),
('158', 'lengket boutique', 'jln.veteran', '', '100.354385', '-0.9344914', 'J11'),
('159', 'garis langit(boutique & istana kado)', 'jln. S. parman', '', '100.3507554', '-0.92021', 'J11'),
('16', 'PT.BRILIAN', 'JL.SPARMAN PADANG', '', '100.352', '-0.91813', 'J01'),
('160', 'oke shop', 'jln.veteran', '', '100.354372', '-0.9347335', 'J11'),
('17', 'PT.ANDALAS MITRA PRESTASI', 'JL.SPARMAN NO.80-82 PADANG', '', '100.35071', '-0.91952', 'J01'),
('175', 'Tambunsu Talua', 'jl. Hamka 23-A Padang 0751-446597', 'Rumah Makan Kapau HAMKA', '100.3518', '-0.888376', 'J25'),
('176', 'BRAVO TOURS', 'Jalan Proklamasi', 'Wisata Perjalanan', '100.365262', '-0.951363', 'J22'),
('177', 'DINAS PETERNAKAN', 'Jalan Rasuna Said', 'Mengelola dan  memantau ', '100.361748', '-0.931817', 'J22'),
('178', 'DPRD SUMBAR', 'Jalan Khatib Sulaiman', 'Tempat pemerintahan', '100.351824', '-0.906801', 'J22'),
('179', 'STADION GOR', 'Jl. Batang Pasaman', 'Lapangan Bola Internasional', '100.358921', '-0.929253', 'J22'),
('18', 'PT.TRIDAYA PESONA WISATA', 'JL.SPARMAN PADANG', '', '100.35088', '-0.92193', 'J01'),
('180', 'GED PERTEMUAN POLDA', 'Jalan Ir. Haji Juanda', 'Balai Pertemuan', '100.351561', '-0.924485', 'J22'),
('181', 'KANTOR GUBERNUR', 'Jl. Jend Sudirman', 'Gubernur SUMBAR', '100.360466', '-0.937578', 'J22'),
('182', 'KOMITE OLAHRG NASIONAL INDONESIA', 'Jl. Hasanudin', 'Memantau dan Mengelola kegiatan dibidang Olahraga', '100.364350', '-0.951883', 'J22'),
('183', 'MASJID RAYA SUMBAR', 'Jalan Khatib Sulaiman', 'Ibadah bagi muslim', '100.361678', '-0.925354', 'J22'),
('184', 'MUSEUM GEMPA DAN BENCANA', 'Jl.Robert Wolter Mongonsidi', 'Museum Bersejarah gempa SUMBAR', '100.355708', '-0.953347', 'J22'),
('185', 'PLAZA TELKOM', 'Kyai Haji Ahmad Dahlan', 'Tempat Pembayaran Telepon Rumah ', '100.362166', '-0.926255', 'J22'),
('186', 'Dendeng Batokok', 'jl. Cendrawasih 4 Padang 0751 7057270', 'Nasi Kapau Spesifik', '100.349953', '-0.888827', 'J25'),
('187', 'DINAS PENDIDIKAN', 'Jl. Jend Sudirman', 'memantau dan mengelola pendidikan', '100.361952', '-0.93459', 'J22'),
('188', 'SENDIK BRI', 'JL. Dr Hatta', 'Central pendidikan kota Padang', '100.428313', '-0.928712', 'J22'),
('189', 'TAMAN BUDAYA', 'Jl.Robert Wolter Mongonsidi', 'Tempat Pertunjukan ', '100.355085', '-0.954667', 'J22'),
('19', 'PT.TRANSTAR TRAVEL', 'JL.SPARMAN  PADANG', '', '100.35143', '-0.92595', 'J01'),
('190', 'VAMELANIA', 'JL. Dr Hatta', 'Loundry', '100.421861', '-0.930031', 'J22'),
('191', 'Tari Pasambahan', 'Jl. Nuri No. 6 Air Tawar', 'Sanggar Tari Syofyani', '100.35004', '-0.90028', 'J23'),
('192', 'Tari Piring', 'Jl. Batang Tarusan Dalam No 6 a Padang Baru Timur', 'Sanggar Tari Tuah Saiyo', '100.36446', '-0.92811', 'J23'),
('193', 'Tari Alang Babega', 'Anduriang', 'Sanggar Satampang Baniah', '100.38899', '-0.93576', 'J23'),
('194', 'Tari Pasambahan', 'Tarandam', 'Bundo Kanduang', '100.36863', '-0.95195', 'J23'),
('195', 'Tari Payung', 'Jl. Jaya Putra No M1/12 Wisma Indah IV Siteba', 'Sanggar Pelangi Ranah Minang', '100.36945', '-0.89539', 'J23'),
('196', 'Tari Piring', 'Sawahan', 'Sanggar Tari Cahayo Bundo', '100.37032', '-0.94492', 'J23'),
('197', 'Randang', 'Jl. Sutan Syahrir 197 Padang 0751 83464', 'Rumah Makan Pak Datuk', '100.378548', '-0.970184', 'J25'),
('198', 'Taman Budaya', 'Jl.Robert Wolter Mongonsidi', 'Tempat Panggung Seni Tari', '100.35442', '-0.95482', 'J23'),
('199', 'Gulai Tunjang', 'Jl. Sutan Syahrir 351 Padang', 'Rumah Makan Pak Sidi', '100.377689', '-0.970355', 'J25'),
('20', 'PT.SRIWIJAYA AIR', 'JL.JUANDA', '', '100.3519', '-0.92831', 'J01'),
('200', 'Gulai Lauak Pasia', 'Jl. Khatib Sulaiman 65 Padang', 'Rumah Makan Pauh Piaman', '100.359997', '-0.916611', 'J25'),
('201', 'Rendang', 'Jl. Adinegoro Padang', 'Rumah Makan Salero Baru', '100.327438', '-0.808498', 'J25'),
('202', 'Rendang', 'Jl. Bagindo Azis Chan 24 Padang', 'Restoran Simpang Raya', '100.364202', '-0.951347', 'J25'),
('203', 'Rendang', 'jl. Khatib Sulaiman 65 Padang', 'Rumah Makan Singgalang', '100.359847', '-0.916654', 'J25'),
('204', 'BANK INDONESIA', 'Jl. Jend Sudirman', 'Melayani nasabah', '100.362622', '-0.94299', 'J22'),
('205', 'Lubuk Tampurung', 'kel. Kuranji, Kota Padang', 'salah satu pariwisata kota padang, panorama dan air terjun', '100.430954', '-0.866256', 'J20'),
('206', 'Lubuk Tampurung', 'kel. Kuranji, Kota Padang', 'salah satu pariwisata kota padang, panorama dan air terjun', '100.431172', '-0.865956', 'J14'),
('207', 'Universitas Andalas', 'Jl. dr. Hatta', 'Salah satu Kampus Negeri di kota Padang', '100.460647', '-0.912513', 'J29'),
('208', 'Universitas Baiturrahmah', 'Jl. Bypass', 'Kampus swasta yayasan Baiturrahamh', '100.383962', '-0.870719', 'J29'),
('209', 'Universitas Negeri Padang', 'Jalan Professor Doktor Hamka, Padang, Kota Padang, Sumatera Barat 25171, Indonesia', 'Salah satu Kampus Negeri di kota Padang', '100.349216', '-0.898525', 'J29'),
('21', 'PT.ERO TOUR', 'JL.JUANDA', '', '100.35225', '-0.92972', 'J01'),
('22', 'PT.ANUGRAH TOURS', 'JL.VETERAN ', '', '100.35369', '-0.93208', 'J01'),
('23', 'PT.RENY MARTHA', 'JL.VETERAN  NO.94 B PADANG', '', '100.35369', '-0.9043218', 'J01'),
('230', 'Kantor Walikota Padang Baru', 'Jl. Bypass', 'Sedang Persiapan,Belum Beroperasi', '100.388291', '-0.878427', 'J31'),
('24', 'PT.BALI NUH WISATA', 'JL.THAMRIN DALAM NO.1A', '', '100.3627', '-0.955', 'J01'),
('25', 'PT.MENJELAJAH EXPRES', 'JL.THAMRIN DALAM NO.9A', '', '100.3627', '-0.9553', 'J01'),
('26', 'PT.INA TOUR', 'JL.NIPAH/ARAU NO 8B', '', '100.35246', '-0.96531', 'J01'),
('27', 'PT.ASIA TRAVEL', 'JL.OLO LADANG NO.16', '', '100.35296', '-0.94316', 'J01'),
('28', 'PT.TOUR & TRAVEL STI', 'JL.GAJAH MADA', '', '100.3659', '-0.92073', 'J01'),
('29', 'PT.FIRZA ANASKA JAYA', 'JL.GADAH MADA NO.10', '', '100.36434', '-0.909914', 'J01'),
('30', 'PT.WISATA INDONESIA', 'JL.JHONI ANWAR NO.1B LAPAI PADANG', '', '100.36022', '-0.90035', 'J01'),
('31', 'PT.DUTA PESONA WISATA ', 'JL.JHONI ANWAR NO.4B LAPAI PADANG', '', '100.36094', '-0.90307', 'J01'),
('33', 'CV.PULL TRANEK MANDIRI ', 'JL.SPARMAN  PADANG', '', '100.35088', '-0.90779', 'J01'),
('34', 'PO.KETAPING JAYA TOUR', 'JL.PROF DR.HAMKA NO.3', '', '100.35131', '-0.89638', 'J01'),
('35', 'polsek koto tangah', 'Jln Adinegoro', '', '100.32377', '-0.81904', 'J02'),
('36', 'polsek padang utara', 'Jln Hamka', '', '100.35237', '-0.89142', 'J02'),
('37', 'polsek nanggalo', 'Jln Gajah Mada', '', '100.36698', '-0.907795', 'J02'),
('38', 'polsek padang barat', 'Jln Ir Juanda', '', '100.35121', '-0.92477', 'J02'),
('39', 'polda sumbar', 'Jln Sudirman', '', '100.36134', '-0.937', 'J02'),
('40', 'pos olo sektor padang barat', 'Jln Pemuda', '', '100.35483', '-0.94831', 'J02'),
('41', 'polsek padang selatan', 'Jln Niaga no.291', '', '100.36341', '-0.96129', 'J02'),
('43', 'polsek padang timur', 'Jln Dr. Sutomo', '', '100.38753', '-0.95144', 'J02'),
('44', 'polsek lubuk kilangan', 'Jln Raya Indarung', '', '100.41967', '-0.9524', 'J02'),
('45', 'polsek pauh', 'Jln. Dr. M. Hatta', '', '100.42569', '-0.92985', 'J02'),
('46', 'polsek kuranji', 'Jln Raya Bypass', '', '100.39755', '-0.92339', 'J02'),
('47', 'polsek lubeg', 'Jln Bypass Pampangan', '', '100.39144', '-0.98348', 'J02'),
('48', 'direktorat lalu lintas', 'Jln Nipah', '', '100.35747', '-0.96345', 'J02'),
('49', 'Basko Hotel ', 'Jl.Hamka No.2 A Padang', '', '100.350778', '-0.901839', 'J03'),
('50', 'Pangeran Beach Hotel', 'Jl. Ir.Juanda No.79', '', '100.350858', '-0.923713', 'J03'),
('52', 'Grand Inna Muara', 'Jl. Gereja No. 34', '', '100.356494', '-0.956775', 'J03'),
('53', 'Rocky Plaza Hotel', 'Jl. Permindo No. 40 Padang', '', '100.359286', '-0.946822', 'J03'),
('54', 'The Axana Hotel ', 'Jl. Bundo Kanduang No 14', '', '100.359206', '-0.954326', 'J03'),
('55', 'Hayam Wuruk Hotel', 'Jl. Hayam Wuruk No.16 Padang', '', '100.354582', '-0.959612', 'J03'),
('56', 'Savali Hotel', 'Jl.Hayam Wuruk No.31-33 Padang', '', '100.355335', '-0.95789', 'J03'),
('57', 'Aliga Hotel', 'Jl.Thamrin No.71 Padang', '', '100.364211', '-0.95446', 'J03'),
('58', 'Pangeran city Hotel', 'Jl. Dobi No.3-5', '', '100.359477', '-0.955364', 'J03'),
('60', 'Dipo International', 'Jl. Diponegoro No.13', '', '100.355475', '-0.955085', 'J03'),
('62', 'Femina Hotel', 'Jl. Bagindo Aziz Chan No.15', '', '100.363208', '-0.949394', 'J03'),
('63', 'Hotel Padang', 'Jl. Bagindo Aziz Chan No.28', '', '100.363682', '-0.949298', 'J03'),
('64', 'Hotel Rumah Nenek', 'Jl.Batang Agam No.5 Padang', '', '100.357881', '-0.925504', 'J03'),
('65', 'Hotel Bunda', 'Jl.Bundo Kanduang No.19 Padang', '', '100.359214', '-0.953857', 'J03'),
('67', 'Dhave Hotel', 'Jl.Purus IV A Padang', '', '100.35157', '-0.936157', 'J03'),
('70', 'Ion Hotel', 'Jl.S Parman No.250 Ulak karang', '', '100.350982', '-0.9079', 'J03'),
('72', 'Masjid Asy-Syahidin', 'Jln.S.Parman', '', '100.35088', '-0.92193', 'J04'),
('73', 'Masjid Al-Bahrain', 'Jl. Ir.H.Juanda', '', '100.35143', '-0.92799', 'J04'),
('74', 'Masjid Al-Wustha', 'Jln. Veteran Purus', '', '100.35459', '-0.9382', 'J04'),
('75', 'Gereja Santa Elisabet', 'Jln. Gereja No.32', '', '100.35716', '-0.95603', 'J04'),
('77', 'Masjid Nurul Iman', 'Jln. Thamrin', '', '100.36246', '-0.95517', 'J04'),
('78', 'Masjid Nurush Shadiqin', 'Jln. Tepi Pasang', '', '100.36107', '-0.95869', 'J04'),
('79', 'Klenteng China', 'Jln. Kampung Nias', '', '100.36278', '-0.96186', 'J04'),
('8', 'Padang Fashion And Food Festival', 'RRI Padang', '', '100.360621', '-0.944449', 'J21'),
('80', 'Klenteng Long See Tong', 'Jln. Kampung Nias', '', '100.36278', '-0.96186', 'J04'),
('81', 'Masjid Jami'' Ansharullah', 'Jln. ', '', '100.35873', '-0.9597', 'J04'),
('9', 'Alek Teater Se-Sumatera Barat', 'Taman Budaya', '', '100.356781', '-0.958655', 'J17');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE IF NOT EXISTS `image` (
  `id_data` varchar(5) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  KEY `id_data` (`id_data`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `jenis`
--

CREATE TABLE IF NOT EXISTS `jenis` (
  `id` varchar(4) NOT NULL,
  `nama` varchar(50) DEFAULT NULL,
  `id_tipe` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jenis`
--

INSERT INTO `jenis` (`id`, `nama`, `id_tipe`) VALUES
('J01', 'BIRO TRAVEL', 'T02'),
('J02', 'KANTOR POLISI', 'T02'),
('J03', 'HOTEL', 'T02'),
('J04', 'IBADAH', 'T02'),
('J05', 'RUMAH SAKIT', 'T02'),
('J06', 'RUKO', 'T02'),
('J07', 'PASAR', 'T02'),
('J08', 'MALL', 'T02'),
('J09', 'PHOTO STUDIO', 'T04'),
('J10', 'ASURANSI', 'T04'),
('J11', 'BOUTIQUE AND DISTRO', 'T04'),
('J12', 'TOKO PAKAIAN', 'T04'),
('J13', 'PANTAI', 'T05'),
('J14', 'SUNGAI', 'T05'),
('J15', 'TAMAN', 'T05'),
('J16', 'OLAHRAGA', 'T01'),
('J17', 'BUDAYA', 'T01'),
('J18', 'BISNIS', 'T01'),
('J19', 'AGAMA', 'T01'),
('J20', 'PANORAMA', 'T05'),
('J21', 'FASHION', 'T01'),
('J22', 'Bangunan Gonjong', 'T06'),
('J23', 'Tarian', 'T06'),
('J24', 'Alat Musik', 'T06'),
('J25', 'Makanan Khas', 'T06'),
('J26', 'Rabab', 'T06'),
('J27', 'Saluang', 'T06'),
('J28', 'Pakaian Adat', 'T06'),
('J29', 'Universitas', 'T02'),
('J30', 'Sekolah', 'T02'),
('J31', 'Kantor Pemerintahan', 'T02');

-- --------------------------------------------------------

--
-- Table structure for table `tipe`
--

CREATE TABLE IF NOT EXISTS `tipe` (
  `id` varchar(4) NOT NULL,
  `nama` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tipe`
--

INSERT INTO `tipe` (`id`, `nama`) VALUES
('T01', 'EVENT'),
('T02', 'INFRASTRUKTUR'),
('T03', 'PARIWISATA SEJARAH'),
('T04', 'UKM'),
('T05', 'WISATA ALAM'),
('T06', 'BUDAYA MINANGKABAU');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

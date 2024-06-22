-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.22-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for db_itembase_spk
CREATE DATABASE IF NOT EXISTS `db_itembase_spk` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `db_itembase_spk`;

-- Dumping structure for table db_itembase_spk.m_kategori_product
CREATE TABLE IF NOT EXISTS `m_kategori_product` (
  `id_kategori_product` int(11) NOT NULL AUTO_INCREMENT,
  `kategori_product` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_kategori_product`),
  KEY `Index 2` (`id_kategori_product`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table db_itembase_spk.m_kategori_product: ~4 rows (approximately)
/*!40000 ALTER TABLE `m_kategori_product` DISABLE KEYS */;
INSERT INTO `m_kategori_product` (`id_kategori_product`, `kategori_product`) VALUES
	(1, 'Micellar Water'),
	(2, 'Facial Wash'),
	(3, 'Toner'),
	(4, 'Pelembab');
/*!40000 ALTER TABLE `m_kategori_product` ENABLE KEYS */;

-- Dumping structure for table db_itembase_spk.ref_product
CREATE TABLE IF NOT EXISTS `ref_product` (
  `id_kategori_product` int(11) DEFAULT NULL,
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `link_img` text DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `nama_product` varchar(255) DEFAULT NULL,
  `detail_product` text DEFAULT NULL,
  `price` decimal(20,2) DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  KEY `Index 1` (`id_kategori_product`),
  KEY `Index 3` (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table db_itembase_spk.ref_product: ~17 rows (approximately)
/*!40000 ALTER TABLE `ref_product` DISABLE KEYS */;
INSERT INTO `ref_product` (`id_kategori_product`, `id_product`, `link_img`, `brand`, `nama_product`, `detail_product`, `price`) VALUES
	(1, 1, 'https://www.sociolla.com/acne-blemish-treatments/9382-erha-21-acne-back-spray', 'Erha', 'AcneAct Acne Back Spray', 'AcneAct Acne Back Spray', 61300.00),
	(1, 2, 'https://www.sociolla.com/face-serum/59096-eggplant-dark-spot-serum', 'Rojukiss', 'Eggplant Dark Spot Serum', 'Eggplant Dark Spot Serum', 38000.00),
	(1, 3, 'https://www.sociolla.com/eye-care/12329-eye-cream', 'Pyunkang Yul', 'Eye Cream', 'Eye Cream', 520000.00),
	(1, 4, 'https://www.sociolla.com/face-serum/59093-jeju-lotus-pinkinsh-bright-serum', 'Rojukiss', 'Jeju Lotus Pinkinsh Bright Serum', 'Jeju Lotus Pinkinsh Bright Serum', 58500.00),
	(2, 5, 'https://www.sociolla.com/face-serum/55043-lightening-serum-ampoule', 'Wardah', 'Lightening Serum Ampoule', 'Lightening Serum Ampoule', 56000.00),
	(2, 6, 'https://www.sociolla.com/eye-care/26440-revitalift-laser-x3-eye-cream', 'Loreal Paris', 'LOreal Paris Revitalift Triple Action Eye Cream', 'LOreal Paris Revitalift Triple Action Eye Cream', 255000.00),
	(2, 7, 'https://www.sociolla.com/face-serum/55090-niacinamide-brightening-serum', 'True To Skin', 'Niacinamide Brightening Serum', 'Niacinamide Brightening Serum', 109000.00),
	(2, 8, 'https://www.sociolla.com/face-serum/59095-orange-c-bright-pore-care-serum', 'Rojukiss', 'Orange C+ Bright Pore Care Serum', 'Orange C+ Bright Pore Care Serum', 58500.00),
	(3, 9, 'https://www.sociolla.com/face-serum/62180-radiant-skin-serum', 'Elsheskin', 'Radiant Skin Serum', 'Radiant Skin Serum', 129000.00),
	(3, 10, 'https://www.sociolla.com/face-serum/57713-elsheskin-radiant-supple-serum', 'Elsheskin', 'Radiant Supple Serum', 'Radiant Supple Serum', 215000.00),
	(3, 11, 'https://www.sociolla.com/ampoule/56485-royal-vita-propolis-33-ampoule', 'Dr Ceuracle', 'Royal Vita Propolis 33 Ampoule', 'Royal Vita Propolis 33 Ampoule', 499000.00),
	(3, 12, 'https://www.sociolla.com/eye-care/55698-steambase-daily-eyemask-camomile-crown', 'Steambase', 'Steambase Warming Eyemask - Camomile Crown', 'Steambase Warming Eyemask - Camomile Crown', 19900.00),
	(5, 13, 'https://www.sociolla.com/eye-care/55693-steambase-daily-eyemask-grapefruit-tree', 'Steambase', 'Steambase Warming Eyemask - Grapefruit Tree', 'Steambase Warming Eyemask - Grapefruit Tree', 19900.00),
	(5, 14, 'https://www.sociolla.com/eye-care/55691-steambase-daily-eyemask-lavender-blue-water', 'Steambase', 'Steambase Warming Eyemask - Lavender Blue Water', 'Steambase Warming Eyemask - Lavender Blue Water', 19900.00),
	(5, 15, 'https://www.sociolla.com/eye-care/55678-steambase-daily-eyemask-rose-garden', 'Steambase', 'Steambase Warming Eyemask - Rose Garden', 'Steambase Warming Eyemask - Rose Garden', 19900.00),
	(5, 16, 'https://www.sociolla.com/eye-care/55697-steambase-daily-eyemask-silent-night-air', 'Steambase', 'Steambase Warming Eyemask - Silent Night Air', 'Steambase Warming Eyemask - Silent Night Air', 19900.00),
	(1, 17, 'https://www.sociolla.com/face-serum/59093-jeju-lotus-pinkinsh-bright-serum', 'Rojukiss', 'Jeju Lotus Pinkinsh Bright Serum (DUPLICATE)', 'Jeju Lotus Pinkinsh Bright Serum', 58500.00);
/*!40000 ALTER TABLE `ref_product` ENABLE KEYS */;

-- Dumping structure for table db_itembase_spk.trx_rating_product
CREATE TABLE IF NOT EXISTS `trx_rating_product` (
  `id_rating_product` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `rating` decimal(20,2) DEFAULT NULL,
  PRIMARY KEY (`id_rating_product`),
  KEY `Index 2` (`id_rating_product`),
  KEY `Index 3` (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table db_itembase_spk.trx_rating_product: ~25 rows (approximately)
/*!40000 ALTER TABLE `trx_rating_product` DISABLE KEYS */;
INSERT INTO `trx_rating_product` (`id_rating_product`, `id_product`, `username`, `rating`) VALUES
	(1, 1, '1', 4.50),
	(2, 1, '1', 3.50),
	(3, 1, '1', 1.50),
	(4, 1, '1', 1.00),
	(5, 1, '1', 5.00),
	(6, 2, '1', 4.00),
	(7, 2, '1', 3.00),
	(8, 2, '1', 1.00),
	(9, 2, '1', 1.00),
	(10, 2, '1', 2.00),
	(13, 3, '1', 4.53),
	(14, 3, '1', 3.00),
	(15, 3, '1', 4.00),
	(16, 3, '1', 3.00),
	(17, 3, '1', 5.00),
	(20, 4, '1', 2.00),
	(21, 4, '1', 1.00),
	(22, 4, '1', 5.00),
	(23, 4, '1', 2.00),
	(24, 4, '1', 3.00),
	(27, 17, '1', 3.00),
	(28, 17, '1', 3.00),
	(29, 17, '1', 4.00),
	(30, 17, '1', 2.00),
	(31, 17, '1', 5.00);
/*!40000 ALTER TABLE `trx_rating_product` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 27, 2021 at 05:46 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appointmentfinder`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointtable`
--

CREATE TABLE `appointtable` (
  `id` int(11) NOT NULL,
  `erzeuger` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `titel` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `veranstaltungsort` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `info` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `startdatum` datetime NOT NULL DEFAULT current_timestamp(),
  `enddatum` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointtable`
--

INSERT INTO `appointtable` (`id`, `erzeuger`, `titel`, `veranstaltungsort`, `info`, `startdatum`, `enddatum`) VALUES
(1, 'inoweak0', 'encryption', 'Stare Kurowo', 'Up-sized asynchronous attitude', '2020-11-18 12:31:42', '2020-07-04 12:16:15'),
(2, 'vemmens1', 'superstructure', 'Corcuera', 'Compatible client-driven Graphic Interface', '2020-08-08 11:51:35', '2020-07-16 21:56:56'),
(3, 'jsam2', 'bi-directional', 'Aksu', 'De-engineered global installation', '2021-02-06 13:12:01', '2021-04-06 03:07:16'),
(4, 'lhuckerbe3', 'utilisation', 'Nowa GÃ³ra', 'Decentralized actuating initiative', '2020-06-25 17:01:49', '2020-06-27 15:31:55'),
(5, 'dsumsion4', 'portal', 'Ivatsevichy', 'Down-sized context-sensitive software', '2020-10-24 11:09:54', '2020-11-21 18:59:26'),
(6, 'rcowles5', 'Virtual', 'Lambton Shores', 'Extended maximized benchmark', '2021-02-04 19:36:29', '2020-12-02 23:45:49'),
(7, 'jbillanie6', 'application', 'Badong', 'Virtual zero administration artificial intelligence', '2020-09-13 01:34:32', '2020-12-24 01:51:31'),
(8, 'shaggish7', 'Open-source', 'Suvorovo', 'Function-based secondary application', '2020-08-07 14:04:41', '2020-09-06 20:55:41'),
(9, 'smccrillis8', 'Phased', 'Oratorio', 'Business-focused even-keeled forecast', '2020-05-01 20:05:34', '2020-09-07 06:11:05'),
(10, 'pbassano9', 'implementation', 'Kuching', 'User-friendly content-based installation', '2020-05-25 04:29:54', '2020-11-12 04:54:14');

-- --------------------------------------------------------

--
-- Table structure for table `commentstable`
--

CREATE TABLE `commentstable` (
  `id` int(11) DEFAULT NULL,
  `id_appointment` int(11) DEFAULT NULL,
  `erzeuger` varchar(50) DEFAULT NULL,
  `comments_text` varchar(50) DEFAULT NULL,
  `DATE` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `commentstable`
--

INSERT INTO `commentstable` (`id`, `id_appointment`, `erzeuger`, `comments_text`, `DATE`) VALUES
(1, 5, 'tloveredge0', 'Optimized neutral solution', '2020-11-23'),
(2, 1, 'rkittless1', 'Persistent encompassing knowledge user', '2020-11-15'),
(3, 6, 'plamperd2', 'Down-sized interactive database', '2021-03-15'),
(4, 6, 'jrickarsey3', 'Open-source asynchronous success', '2021-02-27'),
(5, 7, 'cmcwhan4', 'Realigned mission-critical flexibility', '2021-01-29'),
(6, 7, 'hsessions5', 'Sharable 24 hour forecast', '2020-09-30'),
(7, 5, 'dbalcon6', 'Streamlined intangible conglomeration', '2020-10-04'),
(8, 8, 'bmacdearmont7', 'Exclusive human-resource forecast', '2021-02-25'),
(9, 6, 'aoakenfull8', 'Fundamental bifurcated implementation', '2020-07-26'),
(10, 1, 'rpoleye9', 'Total 5th generation portal', '2021-02-08');

-- --------------------------------------------------------

--
-- Table structure for table `votestable`
--

CREATE TABLE `votestable` (
  `id` int(11) DEFAULT NULL,
  `id_appointment` int(11) DEFAULT NULL,
  `suggested_date` date DEFAULT NULL,
  `voted_time` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `votestable`
--

INSERT INTO `votestable` (`id`, `id_appointment`, `suggested_date`, `voted_time`) VALUES
(1, 7, '2021-04-22', '2021-02-05'),
(2, 7, '2021-01-27', '2021-04-17'),
(3, 5, '2020-06-07', '2021-03-23'),
(4, 3, '2020-12-06', '2021-01-04'),
(5, 2, '2020-06-20', '2020-09-29'),
(6, 8, '2020-11-17', '2020-09-07'),
(7, 6, '2021-02-13', '2021-01-09'),
(8, 3, '2021-02-06', '2020-05-18'),
(9, 9, '2020-10-11', '2020-11-09'),
(10, 3, '2021-02-06', '2021-02-09');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

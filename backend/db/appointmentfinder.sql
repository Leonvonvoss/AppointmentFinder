-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 27, 2021 at 10:36 PM
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
-- Table structure for table `tAppoint`
--

CREATE TABLE `tAppoint` (
  `id` int(11) NOT NULL,
  `creator` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `info` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tAppoint`
--

INSERT INTO `tAppoint` (`id`, `creator`, `title`, `location`, `info`) VALUES
(1, 'wodornan0', 'actuating', 'Guyangan', 'Cloned stable benchmark'),
(2, 'agowenlock1', 'Proactive', 'Pederneiras', 'Re-engineered motivating instruction set'),
(3, 'freadwing2', 'Streamlined', 'Stockholm', 'User-centric dynamic initiative'),
(4, 'pcowope3', 'Re-engineered', 'Tunggulsari', 'Cross-group real-time system engine'),
(5, 'sbullivent4', 'Graphical User Interface', 'Japeri', 'Front-line motivating architecture'),
(6, 'mmacgilpatrick5', 'forecast', 'Huayuan', 'Upgradable upward-trending toolset');

-- --------------------------------------------------------

--
-- Table structure for table `tComments`
--

CREATE TABLE `tComments` (
  `id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `datePosted` datetime NOT NULL,
  `tAppointID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tComments`
--

INSERT INTO `tComments` (`id`, `comment`, `datePosted`, `tAppointID`) VALUES
(1, 'Expanded regional budgetary management', '0000-00-00 00:00:00', 4),
(2, 'User-friendly fresh-thinking implementation', '0000-00-00 00:00:00', 5),
(3, 'Cross-platform motivating open architecture', '0000-00-00 00:00:00', 1),
(4, 'Centralized grid-enabled support', '0000-00-00 00:00:00', 2),
(5, 'Visionary bandwidth-monitored contingency', '0000-00-00 00:00:00', 4),
(6, 'Versatile actuating open architecture', '0000-00-00 00:00:00', 6);

-- --------------------------------------------------------

--
-- Table structure for table `tPossibleDates`
--

CREATE TABLE `tPossibleDates` (
  `id` int(11) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `tAppointID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tPossibleDates`
--

INSERT INTO `tPossibleDates` (`id`, `startDate`, `endDate`, `tAppointID`) VALUES
(1, '2021-06-25 07:03:49', '2021-02-11 01:01:50', 3),
(2, '2021-03-15 06:37:16', '2021-03-23 00:17:43', 2),
(3, '2021-04-24 03:29:49', '2020-08-31 21:08:55', 4),
(4, '2021-06-18 17:22:23', '2021-05-18 02:30:20', 5),
(5, '2021-07-31 00:50:03', '2021-05-17 16:21:02', 1),
(6, '2020-08-05 19:28:50', '2020-06-14 09:39:48', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tVotes`
--

CREATE TABLE `tVotes` (
  `id` int(11) NOT NULL,
  `voterName` varchar(255) NOT NULL,
  `tPossibleDatesID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tVotes`
--

INSERT INTO `tVotes` (`id`, `voterName`, `tPossibleDatesID`) VALUES
(1, 'Jo', 6),
(2, 'Emelda', 3),
(3, 'Erny', 4),
(4, 'Homere', 3),
(5, 'Kandy', 4),
(6, 'Travers', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tAppoint`
--
ALTER TABLE `tAppoint`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tComments`
--
ALTER TABLE `tComments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tPossibleDates`
--
ALTER TABLE `tPossibleDates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tVotes`
--
ALTER TABLE `tVotes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tAppoint`
--
ALTER TABLE `tAppoint`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tComments`
--
ALTER TABLE `tComments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tPossibleDates`
--
ALTER TABLE `tPossibleDates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tVotes`
--
ALTER TABLE `tVotes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2017 at 07:45 AM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hackathon`
--

-- --------------------------------------------------------

--
-- Table structure for table `responses`
--

CREATE TABLE IF NOT EXISTS `responses` (
  `ques` text NOT NULL,
  `ans` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `responses`
--

INSERT INTO `responses` (`ques`, `ans`) VALUES
('hi', 'Hi There!!!'),
('hello', 'Hi There!!!'),
('hey', 'Hi There!!!'),
('yo', 'Whazzup!'),
('how are you?', 'Never felt better'),
('How r u?', 'Pretty Good\r\nThanks for asking'),
('you are mad', 'hmmmm...\r\nI dont appreciate that'),
('whatsup', 'Nothing much\r\nWaiting for your command'),
('hell', 'how\r\n'),
('ds', 'adsd'),
('how', 'fine\r\n'),
('i am well', 'Good to hear that!'),
('you are stupid', 'You made me\r\nI think i made myself clear ;)'),
('i love u', '^_^'),
('give me money', '10000$ is this enough?'),
('who are you?', 'An AI most probably #)');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

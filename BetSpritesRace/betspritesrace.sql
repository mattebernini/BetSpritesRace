-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 22, 2021 alle 10:44
-- Versione del server: 8.0.21
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_betspritesrace`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `corridore`
--

CREATE TABLE IF NOT EXISTS `corridore` (
  `nome` varchar(100) NOT NULL,
  `vittorie` int NOT NULL,
  `2posto` int NOT NULL,
  `3posto` int NOT NULL,
  `punteggio` int NOT NULL,
  PRIMARY KEY (`nome`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `corridore`
--

INSERT INTO `corridore` (`nome`, `vittorie`, `2posto`, `3posto`, `punteggio`) VALUES
('Avatar Punk', 21, 33, 34, 163),
('Jack Uncino', 25, 23, 28, 149),
('Jonny', 32, 27, 29, 179),
('Mago Ernesto', 38, 28, 18, 188),
('Papera Spia', 17, 25, 34, 135),
('Villan Default', 33, 30, 23, 182);


-- --------------------------------------------------------

--
-- Struttura della tabella `utente`
--

CREATE TABLE IF NOT EXISTS `utente` (
  `username` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `monete` double NOT NULL,
  `tempoGioco` int DEFAULT '0',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `utente`
--

INSERT INTO `utente` (`username`, `password`, `email`, `monete`, `tempoGioco`) VALUES
('aaa', '$2y$10$fSS7DP9MBG/kYNxVJvuvNuFHIE7QYFXTQvPktWAApxOGTzwlk8twe', '', 10, 0),
('aaaaaaaaaa', '$2y$10$PBVJasP4lbNeoTeYPAmXzeBSpp20glwyzZjnTWkrk05k2YWDWa/c2', 'a@a', 10, 0),
('adghfh', '$2y$10$pRfspowt3rk8emGsEEXyc.I4yFA62csJRktQ8svbAoyXEjWv0mBdm', 'a@g.it', 10, 0),
('ale', '$2y$10$JofJw/TOLTpAUCfOS/U2me0poHxu1k0goe6c392CT7SaLAXZvxdE6', '', 9, 3),
('altervista', '$2y$10$QTtJ6QcIyko/Qtl7UMhEluCtDG0rFbZmH6BN2xCwowsYmKw9NTGnK', '', 77.13, 10),
('Andre', '$2y$10$PhFVBUKIjvzGW1J3OLUMFOCI46/Q2Fe9pmyT7bXaOlXraXlgE0vh.', '', 42.22, 4),
('Angelo', '$2y$10$gi91gEKJ8yekURuI4vG1UuOvbPfu5ud2onIjQkmuT5TBoqypaVeGa', '', 16, 1),
('Anto', '$2y$10$u8euCsOmOIzmBpkRvQJ8eesE7BK4rOBJ/VBeI2swce9aQwktUF3zq', '', 10, 0),
('bbbb', '$2y$10$b7hRq4PwtPFrD2ehKBMl6.TIpxe7wddT3OXD/C0flaZUSMyDS0sHS', 'bbb@dfg.it', 15, 0),
('bla', '$2y$10$keooX.Xi7t5YRxKKGIe9HeFXrURrW8FO7gnNv8EPPdyVnJvk.hjju', 'bla@bla', 10, 0),
('censored1', '$2y$10$6mfBAT2a7rd8yWsh7VA7HOcvoHuRc3NP7oFYU.eioCAAHl7m/Kfeu', '', 21, 1),
('Chris99', '$2y$10$tBLiYGriddrzIMhpQxjovO/qsyCyE/DFsOcCpfky7F1lzbq8kHNv.', '', 10, 0),
('ciao', '$2y$10$4qMCrWYicJ4D.ydyf9NK6OrBlmQHMtmmNLjG1kOzqumhYXiWhnKvq', '', 15, 0),
('Cugi', '$2y$10$hpk/l6cQz6qBvK9tui8mf.8f02MDKO/ILHj1JUzIC3pBOjoILgrJq', '', 750, 24),
('darione', '$2y$10$.r5jjycx1sgjPaTYYrZ9CuhzCgR/wXaFDyMh1Wp0QsnPMmXE4u8Be', 'adele.ottone2002@gmail.com', 10, 0),
('dhdh', '$2y$10$jxmi7mkF.TStBxtCuK2m6u.YuR1rmswy47g1obHVYKFj9osQIKbgW', '', 10, 0),
('Driveights', '$2y$10$4Xmf3/Qb5Vrz25tz9Jw8iem6ODbJlaEUWE2UGkmsLEFcnQI6GYeyK', 'lorenzoguidotti21@gmail.com', 10, 0),
('EvilStea', '$2y$10$OLmi.dYl.5BYhwBvxAKgi.r17ebQgLu/fMDv304ChZuCMOXtNZW42', '', 3400.8, 1),
('gabriele', '$2y$10$h.5xANwM0a1PHztRo1cAaOnOTpUIEStsmYZmMK9aRHC3jK3G70Ru2', 'prova@prova.it', 10, 0),
('Gg1', '$2y$10$Vkv13QFKvoyC3SngIn5d/uFv995FOpi0Hsx0K4dzmeIpMDlyDNYgK', '', 21, 1),
('Giuliobello', '$2y$10$/YlcpE5h6X/6.V.NyhRAl.QnnD4gXqQnBei5cmGKhj610IXGvpcG6', '', 5, 1),
('giuliopedemonte', '$2y$10$FFg0H8PnvonT1MnoqwZBSuAR8RG2Ja2hn3.5VoLnX7ZqhrWLZ42iu', 'giuliopedemonte29@gmail.com', 10, 0),
('GM8601', '$2y$10$L.fuf5WGx6boyTyF2ytsWeivjdBKhwe0u2LG7rn9z.s23sSmNc5xm', '', 16, 0),
('gs__', '$2y$10$dFbadgPlWpbibZE21.Xhd.SRF4ZA//xJaISrnnS/K/j4g0ePlf5Ua', '', 12, 0),
('hello', '$2y$10$kQD5sVS6Jov2JX5QIHdTh..Pg75viPBxZX8hv3zmQkUsON7LVHwiq', '', 1782.05, 11),
('iack', '$2y$10$AllxF9VQmCdeD6G3GbJ2oey4Meau9WtHkyvVJ8fXW4tkQlwlyLzhq', 'iacopoguarnieri@gmail.com', 21.71, 1),
('Jacopo00', '$2y$10$Hc098l3o7uCw0LLwtPZse.P11gwcfOwCA3IYjzTxTnWkap/JZ5XNW', '', 14, 0),
('Luca', '$2y$10$SaEXuN5pZVJHboiOmMmDke3Vv0DvIODcptmLXtjwjRkh8bUINTn4a', 'chiocchettiluca15@gmail.com', 16, 0),
('marco', '$2y$10$SDKISUlXOXO71yEpOI8NpOCzJ46P91gEYSm2FKPOcw.6VUVxn8KZe', '', 11.240000000000002, 4),
('matte', '$2y$10$yoj/.49RBagjP4l1Rc5Ab.GOLpN/obanbGHO1EiYGGPSQ1nSxJ74u', '', 653, 28),
('Pietro', '$2y$10$xcg/Fv5w2YNGgCYtflXP1O5ZgkScueDKJR9glFaW9gSCvjYkEDm6q', '', 18, 0),
('pippo', '$2y$10$IfhW40kzlUNNiZoPL4AYa.iSZ8//70MU1bl4V6NKCuvtKHnNIAojG', '', 10, 0),
('Pippo1234', '$2y$10$148Jl0s3PcmGgiiyBafXNOJtfUrgXgtV2c8GmuCQ3HamzcFvqhq9y', '', 10, 0),
('pippoFranco', '$2y$10$pi2x236yltH0tP.n9lXPpu8h1mbW70RG0vQ2wpAZ1c.PzBjfn1WYm', '', 11, 2),
('prova', '$2y$10$S7noHkxJq0QXCi66QbFdoergw/v939kqp8MxEqhZVshWe99DEUZQG', '', 83.06, 21),
('prova1234', '$2y$10$79SeW7E1NSe8GCT/RYzGrO7Ui0mtvbos/fvVBaX3lmG4OFBA7bma.', 'prova1234@gmail.com', 1, 0),
('sasso', '$2y$10$4i.p479HC7Eg/8ERLpFyue95sFgZxvBEvO5XUbZOIcT92bH9vnlP2', '', 16, 0),
('Seghino', '$2y$10$SGb3uIFh4TaxuGVP290zZ.L3v8JwkPrA9.oNc9WdOSDhq4nyVFgku', '', 21, 5),
('test', '$2y$10$p1Sck4BEyegwP1MqWa6DV.CdtbcmsOou.JQxng2tg3GAcM0pyfSWy', '', 777, 83),
('test2222', '$2y$10$mpgyc8ZAT.X.qsfR9NbDV.cD.6berIWXqH8DR7C/kTIzSD4dMrw9S', 'test@test.it', 13, 0),
('testt', '$2y$10$lT8rRzMOEnqpuLBrnstZZ.W5gj/jbSWgNUfTXam/DuTSDEWxusat.', 'test@fg.it', 11, 0),
('Tonino', '$2y$10$QvJx6ZVy2qroSDMpR0XUXu9PY286dp7N3iO3SPGJ91eddDOwRUe5W', '', 10, 0),
('topolino', '$2y$10$S2Ppc4QU9ez1BL8sbeZhv.AQx.Ozon5Xpmmm7aVLWpT6b.tp0MtOi', '', 43, 2),
('Voldemort82', '$2y$10$mbBWq1duGEpJJDutwSdWTeyrr8OPX0PqPTxku.K.Oqvc7lzatcqS6', '', 82, 7),
('Zzz', '$2y$10$j80A4XRUFPKcrqbggtbeqeg/hN/mIj75VF39KkGW4sAjDLz6uulWa', '', 9, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

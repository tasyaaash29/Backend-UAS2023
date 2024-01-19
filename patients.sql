-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Jan 2024 pada 04.10
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data_covid`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `patients`
--

CREATE TABLE `patients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `status` enum('positive','negative','recovered','dead') NOT NULL,
  `in_date_at` date NOT NULL,
  `out_date_at` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `patients`
--

INSERT INTO `patients` (`id`, `name`, `phone`, `address`, `status`, `in_date_at`, `out_date_at`, `created_at`, `updated_at`) VALUES
(1, 'John Doe', '081234567890', 'Jl. Lorem Ipsum Dolor Sit Amet', 'positive', '2021-01-01', '2021-01-10', NULL, NULL),
(2, 'Alice', '081234567891', 'Jl. Lorem Ipsum Dolor Sit Amet', 'negative', '2021-01-01', '2021-01-10', NULL, NULL),
(3, 'Ari', '081234567892', 'Jl. Lorem Ipsum Dolor Sit Amet', 'recovered', '2021-01-01', '2021-01-10', NULL, NULL),
(4, 'Dela', '081234567893', 'Jl. Lorem Ipsum Dolor Sit Amet', 'dead', '2021-01-01', '2021-01-10', NULL, NULL),
(5, 'Eve', '081234567894', 'Jl. Lorem Ipsum Dolor Sit Amet', 'positive', '2021-01-01', '2021-01-10', NULL, NULL),
(6, 'Bagus', '081234567895', 'Jl. Lorem Ipsum Dolor Sit Amet', 'negative', '2021-01-01', '2021-01-10', NULL, NULL),
(7, 'Fadli', '081234567896', 'Jl. Lorem Ipsum Dolor Sit Amet', 'recovered', '2021-01-01', '2021-01-10', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `patients`
--
ALTER TABLE `patients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

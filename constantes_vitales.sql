-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 08-02-2023 a las 08:48:09
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `constantes_vitales`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `dniAlumno` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombreAlumno` varchar(200) NOT NULL,
  `apellidosAlumnos` varchar(200) NOT NULL,
  `nia` varchar(15) NOT NULL,
  `emailAlumno` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `passwordAlumno` varchar(20) NOT NULL,
  `telefonoAlumno` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `codigoCiclo` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`dniAlumno`, `nombreAlumno`, `apellidosAlumnos`, `nia`, `emailAlumno`, `passwordAlumno`, `telefonoAlumno`, `codigoCiclo`) VALUES
('14785258A', 'fff', 'rrr', '233455', 'dfdg@gmail.com', 'rrrrr', '32569874', '2'),
('25896314L', 'bbbbA', 'rregre', '5', 'ff@fhjk.com', 'rgre', '22558471', '1'),
('33456765K', 'v', 'gg', '432', 'vgg@Gmail.com', 'vgg', '3215', '1'),
('55684907R', 'r', 'cc', '3332123', 'rcc2gmail.com', 'rcc', '66666666', '1'),
('99999988D', 'j', 'mm', '876', 'j@gmail.com', 'jmm', '888888888', '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciclos`
--

CREATE TABLE `ciclos` (
  `codigoCiclo` varchar(15) NOT NULL,
  `nombreCiclo` enum('TCAE','TES') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `ciclos`
--

INSERT INTO `ciclos` (`codigoCiclo`, `nombreCiclo`) VALUES
('1', 'TES'),
('2', 'TCAE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultar_espacio_didacticos`
--

CREATE TABLE `consultar_espacio_didacticos` (
  `dniAlumno` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `idContenido` int NOT NULL,
  `fecha` date NOT NULL,
  `permiso` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultar_monitors`
--

CREATE TABLE `consultar_monitors` (
  `dniAlumno` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `idMonitor` int NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `espacio_didacticos`
--

CREATE TABLE `espacio_didacticos` (
  `idContenido` int NOT NULL,
  `tipoContenido` varchar(20) NOT NULL,
  `tituloContenido` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `dniProfesor` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `archivo` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `impartir`
--

CREATE TABLE `impartir` (
  `dniProfesor` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `codigoCiclo` varchar(15) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monitors`
--

CREATE TABLE `monitors` (
  `idMonitor` int NOT NULL,
  `nombreMonitor` varchar(200) NOT NULL,
  `frecuenciaCardiaca` int NOT NULL,
  `saturacionO2` int NOT NULL,
  `tensionASistolica` int NOT NULL,
  `tensionADiastolica` int NOT NULL,
  `concentracionCO2` int NOT NULL,
  `dniProfesor` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `claveMonitor` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesors`
--

CREATE TABLE `profesors` (
  `dniProfesor` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombreProfesor` varchar(200) NOT NULL,
  `apellidosPersona` varchar(200) NOT NULL,
  `rol` enum('profesorAdmin','profesor') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombreCiclo` enum('TCAE','TES','Ambos') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `emailProfesor` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `passwordProfesor` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `telefonoProfesor` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `profesors`
--

INSERT INTO `profesors` (`dniProfesor`, `nombreProfesor`, `apellidosPersona`, `rol`, `nombreCiclo`, `emailProfesor`, `passwordProfesor`, `telefonoProfesor`) VALUES
('25560111N', '', '', 'profesorAdmin', 'TCAE', 'ggdfsg@ds.vom', '', '444444');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`dniAlumno`),
  ADD KEY `codigoCiclo` (`codigoCiclo`);

--
-- Indices de la tabla `ciclos`
--
ALTER TABLE `ciclos`
  ADD PRIMARY KEY (`codigoCiclo`);

--
-- Indices de la tabla `consultar_espacio_didacticos`
--
ALTER TABLE `consultar_espacio_didacticos`
  ADD PRIMARY KEY (`dniAlumno`,`idContenido`),
  ADD KEY `dniAlumno` (`dniAlumno`),
  ADD KEY `idContenido` (`idContenido`);

--
-- Indices de la tabla `consultar_monitors`
--
ALTER TABLE `consultar_monitors`
  ADD PRIMARY KEY (`dniAlumno`,`idMonitor`),
  ADD KEY `dniAlumno` (`dniAlumno`),
  ADD KEY `idMonitor` (`idMonitor`);

--
-- Indices de la tabla `espacio_didacticos`
--
ALTER TABLE `espacio_didacticos`
  ADD PRIMARY KEY (`idContenido`),
  ADD KEY `dniProfesor` (`dniProfesor`);

--
-- Indices de la tabla `impartir`
--
ALTER TABLE `impartir`
  ADD PRIMARY KEY (`dniProfesor`,`codigoCiclo`),
  ADD KEY `dniProfesor` (`dniProfesor`),
  ADD KEY `codigoCiclo` (`codigoCiclo`);

--
-- Indices de la tabla `monitors`
--
ALTER TABLE `monitors`
  ADD PRIMARY KEY (`idMonitor`),
  ADD KEY `dniProfesor` (`dniProfesor`);

--
-- Indices de la tabla `profesors`
--
ALTER TABLE `profesors`
  ADD PRIMARY KEY (`dniProfesor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `espacio_didacticos`
--
ALTER TABLE `espacio_didacticos`
  MODIFY `idContenido` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `monitors`
--
ALTER TABLE `monitors`
  MODIFY `idMonitor` int NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_ibfk_2` FOREIGN KEY (`codigoCiclo`) REFERENCES `ciclos` (`codigoCiclo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `consultar_espacio_didacticos`
--
ALTER TABLE `consultar_espacio_didacticos`
  ADD CONSTRAINT `consultar_espacio_didacticos_ibfk_1` FOREIGN KEY (`dniAlumno`) REFERENCES `alumnos` (`dniAlumno`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `consultar_espacio_didacticos_ibfk_2` FOREIGN KEY (`idContenido`) REFERENCES `espacio_didacticos` (`idContenido`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `consultar_monitors`
--
ALTER TABLE `consultar_monitors`
  ADD CONSTRAINT `consultar_monitors_ibfk_1` FOREIGN KEY (`dniAlumno`) REFERENCES `alumnos` (`dniAlumno`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `consultar_monitors_ibfk_2` FOREIGN KEY (`idMonitor`) REFERENCES `monitors` (`idMonitor`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `espacio_didacticos`
--
ALTER TABLE `espacio_didacticos`
  ADD CONSTRAINT `espacio_didacticos_ibfk_1` FOREIGN KEY (`dniProfesor`) REFERENCES `profesors` (`dniProfesor`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `impartir`
--
ALTER TABLE `impartir`
  ADD CONSTRAINT `impartir_ibfk_1` FOREIGN KEY (`dniProfesor`) REFERENCES `profesors` (`dniProfesor`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `impartir_ibfk_2` FOREIGN KEY (`codigoCiclo`) REFERENCES `ciclos` (`codigoCiclo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `monitors`
--
ALTER TABLE `monitors`
  ADD CONSTRAINT `monitors_ibfk_1` FOREIGN KEY (`dniProfesor`) REFERENCES `profesors` (`dniProfesor`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

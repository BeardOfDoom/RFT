-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`TRAINS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`TRAINS` (
  `ID` INT GENERATED ALWAYS AS () VIRTUAL,
  `TYPE` VARCHAR(45) NOT NULL,
  `STATUS` VARCHAR(200) NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`WAGONS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`WAGONS` (
  `ID` VARCHAR(50) NOT NULL,
  `SEATS_NUMBER` INT NOT NULL,
  `CLASS` INT NULL,
  `WIFI` TINYINT(1) NULL,
  `STATUS` VARCHAR(200) NULL,
  `TRAINS_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC),
  INDEX `fk_WAGONS_TRAINS1_idx` (`TRAINS_ID` ASC),
  CONSTRAINT `fk_WAGONS_TRAINS1`
    FOREIGN KEY (`TRAINS_ID`)
    REFERENCES `mydb`.`TRAINS` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`SEATS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`SEATS` (
  `ID` INT GENERATED ALWAYS AS () VIRTUAL,
  `RESERVED` TINYINT(1) NOT NULL,
  `NUMBER` INT NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`WAGON_SEAT_CONNECTION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`WAGON_SEAT_CONNECTION` (
  `SEATS_ID` INT NOT NULL,
  `WAGONS_ID` VARCHAR(50) NOT NULL,
  INDEX `fk_WAGON_SEAT_CONNECTION_SEATS1_idx` (`SEATS_ID` ASC),
  INDEX `fk_WAGON_SEAT_CONNECTION_WAGONS1_idx` (`WAGONS_ID` ASC),
  CONSTRAINT `fk_WAGON_SEAT_CONNECTION_SEATS1`
    FOREIGN KEY (`SEATS_ID`)
    REFERENCES `mydb`.`SEATS` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_WAGON_SEAT_CONNECTION_WAGONS1`
    FOREIGN KEY (`WAGONS_ID`)
    REFERENCES `mydb`.`WAGONS` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ROUTES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ROUTES` (
  `ID` INT GENERATED ALWAYS AS () VIRTUAL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`TRAIN_ROUTE_CONNECTION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`TRAIN_ROUTE_CONNECTION` (
  `START` DATETIME NOT NULL,
  `TRAINS_ID` INT NOT NULL,
  `ROUTES_ID` INT NOT NULL,
  INDEX `fk_TRAIN_ROUTE_CONNECTION_TRAINS1_idx` (`TRAINS_ID` ASC),
  INDEX `fk_TRAIN_ROUTE_CONNECTION_ROUTES1_idx` (`ROUTES_ID` ASC),
  CONSTRAINT `fk_TRAIN_ROUTE_CONNECTION_TRAINS1`
    FOREIGN KEY (`TRAINS_ID`)
    REFERENCES `mydb`.`TRAINS` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TRAIN_ROUTE_CONNECTION_ROUTES1`
    FOREIGN KEY (`ROUTES_ID`)
    REFERENCES `mydb`.`ROUTES` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`STATIONS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`STATIONS` (
  `ID` INT GENERATED ALWAYS AS () VIRTUAL,
  `PLATFORMS` INT NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`NEIGHBOURS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`NEIGHBOURS` (
  `NEIGHBOUR_ID` INT NOT NULL,
  `DISTANCE` INT NOT NULL,
  `STATIONS_ID` INT NOT NULL,
  INDEX `fk_NEIGHBOURS_STATIONS1_idx` (`STATIONS_ID` ASC),
  CONSTRAINT `fk_NEIGHBOURS_STATIONS1`
    FOREIGN KEY (`STATIONS_ID`)
    REFERENCES `mydb`.`STATIONS` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ROUTE_STATIONS_CONNECTION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ROUTE_STATIONS_CONNECTION` (
  `PLATFORM` INT NOT NULL,
  `EXPLETIVE_TICKET` TINYINT(1) NOT NULL,
  `ROUTES_ID` INT NOT NULL,
  `STATIONS_ID` INT NOT NULL,
  INDEX `fk_ROUTE_STATIONS_CONNECTION_ROUTES1_idx` (`ROUTES_ID` ASC),
  INDEX `fk_ROUTE_STATIONS_CONNECTION_STATIONS1_idx` (`STATIONS_ID` ASC),
  CONSTRAINT `fk_ROUTE_STATIONS_CONNECTION_ROUTES1`
    FOREIGN KEY (`ROUTES_ID`)
    REFERENCES `mydb`.`ROUTES` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ROUTE_STATIONS_CONNECTION_STATIONS1`
    FOREIGN KEY (`STATIONS_ID`)
    REFERENCES `mydb`.`STATIONS` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`TICKETS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`TICKETS` (
  `PRICE` INT NOT NULL,
  `TYPE` VARCHAR(45) NOT NULL,
  `DISTANCE` INT NOT NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`USERS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`USERS` (
  `NICKNAME` VARCHAR(45) NOT NULL,
  `PASSWORD` VARCHAR(45) NOT NULL,
  `TYPE` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`NICKNAME`),
  UNIQUE INDEX `NICKNAME_UNIQUE` (`NICKNAME` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

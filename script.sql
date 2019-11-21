-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema meu_bolso_seguro
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema meu_bolso_seguro
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`expenses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`expenses` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `price` DOUBLE NOT NULL,
  `quantity` INT NULL,
  `dueDate` DATE NULL,
  `expensescol` VARCHAR(45) NULL,
  `typeOfSpend` VARCHAR(50) NULL,
  `degreeOfImportance` VARCHAR(45) NULL,
  `description` VARCHAR(255) NULL,
  `status` VARCHAR(45) NULL,
  `users_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_expenses_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_expenses_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `meu_bolso_seguro`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`inputs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`inputs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `price` DOUBLE NULL,
  `description` VARCHAR(255) NULL,
  `inputsDate` DATE NULL,
  `users_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_inputs_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_inputs_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `meu_bolso_seguro`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`movements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`movements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lastDatemovements` DATE NULL,
  `reuseBalance` TINYINT NULL,
  `users_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_movements_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_movements_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `meu_bolso_seguro`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `meu_bolso_seguro` ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

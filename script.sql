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
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`expense`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`expense` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `price` DOUBLE NOT NULL,
  `quantity` INT NULL,
  `dueDate` DATE NULL,
  `expensecol` VARCHAR(45) NULL,
  `typeOfSpend` VARCHAR(50) NULL,
  `degreeOfImportance` VARCHAR(45) NULL,
  `description` VARCHAR(255) NULL,
  `status` VARCHAR(45) NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_expense_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_expense_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `meu_bolso_seguro`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`input`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`input` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `price` DOUBLE NULL,
  `description` VARCHAR(255) NULL,
  `inputDate` DATE NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_input_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_input_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `meu_bolso_seguro`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`movement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`movement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lastDateMovement` DATE NULL,
  `reuseBalance` TINYINT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_movement_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_movement_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `meu_bolso_seguro`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `meu_bolso_seguro` ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
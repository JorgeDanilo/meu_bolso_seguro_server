-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Table `meu_bolso_seguro`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meu_bolso_seguro`.`expense`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`expense` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `price` DOUBLE NOT NULL,
  `quantity` INT NULL,
  `dueDate` DATE NULL,
  `typeOfSpend` VARCHAR(50) NULL,
  `degreeOfImportance` VARCHAR(45) NULL,
  `description` VARCHAR(255) NULL,
  `status` VARsCHAR(45) NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_expense_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_expense_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `meu_bolso_seguro`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meu_bolso_seguro`.`input`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`input` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `price` DOUBLE NULL,
  `description` VARCHAR(255) NULL,
  `inputDate` DATE NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_input_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_input_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `meu_bolso_seguro`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `meu_bolso_seguro`.`movement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`movement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lastDateMovement` DATE NULL,
  `reuseBalance` TINYINT NULL,
  `expense_id` INT UNSIGNED NULL,
  `input_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_movement_expense1_idx` (`expense_id` ASC),
  INDEX `fk_movement_input1_idx` (`input_id` ASC),
  CONSTRAINT `fk_movement_expense1`
    FOREIGN KEY (`expense_id`)
    REFERENCES `meu_bolso_seguro`.`expense` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movement_input1`
    FOREIGN KEY (`input_id`)
    REFERENCES `meu_bolso_seguro`.`input` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `meu_bolso_seguro`.`notification` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `token` VARCHAR(255) NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_notification_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_notification_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `meu_bolso_seguro`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    
ENGINE = InnoDB;











SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- CREATING TRIGGER TO CHANGE TABLE MOVEMENT.


DELIMITER $
-- Quando criar a entrada
CREATE TRIGGER change_movement_insert_input AFTER INSERT
ON input
FOR EACH ROW
BEGIN
	INSERT movement (lastDateMovement, reuseBalance, expense_id, input_id) VALUES
    (NOW(), 1, NULL, NEW.id);
END$

-- Quando alterar a entrada.
CREATE TRIGGER change_movement_update_input AFTER UPDATE
ON input
FOR EACH ROW
BEGIN
	UPDATE movement SET lastDateMovement = NOW(), reuseBalance = 1, expense_id = NULL, input_id = NEW.id
    WHERE movement.id = NEW.id;
END$

-- Quando deletar a entrada
CREATE TRIGGER change_movement_delete_input AFTER DELETE
ON input
FOR EACH ROW
BEGIN
	DELETE FROM movement WHERE movement.input_id = OLD.id;
END$


-- Quando criar a saida
CREATE TRIGGER change_movement_insert_expense AFTER INSERT
ON expense
FOR EACH ROW
BEGIN
	INSERT movement (lastDateMovement, reuseBalance, expense_id, input_id) VALUES
    (NOW(), 1, NEW.id, NULL);
END$

CREATE TRIGGER change_movement_update_expense AFTER UPDATE
ON expense
FOR EACH ROW
BEGIN
	UPDATE movement SET lastDateMovement = NOW(), reuseBalance = 1, expense_id = NEW.id, input_id = NULL
    WHERE movement.id = NEW.id;
END$

DELIMITER ;


-- DROP TRIGGER IF EXISTS change_movement_insert_input;
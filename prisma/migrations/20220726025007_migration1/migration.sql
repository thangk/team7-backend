-- CreateTable
CREATE TABLE `admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(45) NULL,
    `lastName` VARCHAR(45) NULL,
    `role` VARCHAR(45) NULL,
    `email` VARCHAR(127) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart-watch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(45) NULL,
    `password` VARCHAR(127) NULL,
    `email` VARCHAR(127) NULL,
    `firstName` VARCHAR(45) NULL,
    `lastName` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `watches` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imageUrl` VARCHAR(255) NULL,
    `price` DECIMAL(2, 0) NULL,
    `brand` VARCHAR(45) NULL,
    `desc` VARCHAR(511) NULL,
    `caseColour` VARCHAR(45) NULL,
    `bandColour` VARCHAR(45) NULL,
    `bandType` VARCHAR(45) NULL,
    `movementType` VARCHAR(45) NULL,
    `faceSize` VARCHAR(45) NULL,
    `stock` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cart-watch` ADD CONSTRAINT `cartId` FOREIGN KEY (`id`) REFERENCES `carts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cart-watch` ADD CONSTRAINT `watchId` FOREIGN KEY (`id`) REFERENCES `watches`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `customerId` FOREIGN KEY (`id`) REFERENCES `customers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

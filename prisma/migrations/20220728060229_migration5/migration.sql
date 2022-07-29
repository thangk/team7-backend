/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `admin`;

-- CreateTable
CREATE TABLE `admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(45) NULL,
    `lastName` VARCHAR(45) NULL,
    `role` VARCHAR(45) NULL,
    `email` VARCHAR(127) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

/*
  Warnings:

  - You are about to drop the column `username` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `customers` table. All the data in the column will be lost.
  - Made the column `email` on table `admins` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `role` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Made the column `password` on table `customers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `customers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `admins` DROP COLUMN `username`,
    MODIFY `email` VARCHAR(127) NOT NULL,
    MODIFY `imageUpload` MEDIUMTEXT NULL;

-- AlterTable
ALTER TABLE `customers` DROP COLUMN `username`,
    ADD COLUMN `role` VARCHAR(45) NOT NULL,
    MODIFY `password` VARCHAR(127) NOT NULL,
    MODIFY `email` VARCHAR(127) NOT NULL,
    MODIFY `imageUpload` MEDIUMTEXT NULL;

-- AlterTable
ALTER TABLE `watches` ADD COLUMN `name` VARCHAR(45) NULL,
    MODIFY `imageUpload` MEDIUMTEXT NULL;

-- AddForeignKey
ALTER TABLE `watches` ADD CONSTRAINT `watches_id_fkey` FOREIGN KEY (`id`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

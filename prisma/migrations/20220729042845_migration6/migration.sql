/*
  Warnings:

  - Added the required column `password` to the `admins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `admins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admins` ADD COLUMN `password` VARCHAR(127) NOT NULL,
    ADD COLUMN `username` VARCHAR(45) NOT NULL;

/*
  Warnings:

  - A unique constraint covering the columns `[uid]` on the table `admins` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `cart-watch` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uid` to the `admins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uid` to the `cart-watch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admins` ADD COLUMN `imageUpload` VARCHAR(255) NULL,
    ADD COLUMN `imageUrl` VARCHAR(255) NULL,
    ADD COLUMN `uid` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `cart-watch` ADD COLUMN `uid` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `customers` ADD COLUMN `imageUpload` VARCHAR(255) NULL,
    ADD COLUMN `imageUrl` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `watches` ADD COLUMN `imageUpload` VARCHAR(255) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `admins_uid_key` ON `admins`(`uid`);

-- CreateIndex
CREATE UNIQUE INDEX `cart-watch_uid_key` ON `cart-watch`(`uid`);

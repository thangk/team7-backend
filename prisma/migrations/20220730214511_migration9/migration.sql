/*
  Warnings:

  - You are about to drop the column `uid` on the `cart-watch` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uid]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `cart-watch_uid_key` ON `cart-watch`;

-- AlterTable
ALTER TABLE `admins` MODIFY `uid` INTEGER NULL;

-- AlterTable
ALTER TABLE `cart-watch` DROP COLUMN `uid`;

-- AlterTable
ALTER TABLE `customers` ADD COLUMN `uid` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `customers_uid_key` ON `customers`(`uid`);

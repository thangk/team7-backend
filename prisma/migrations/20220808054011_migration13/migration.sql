/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `carts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `cart-watch` DROP FOREIGN KEY `cartId`;

-- DropForeignKey
ALTER TABLE `cart-watch` DROP FOREIGN KEY `watchId`;

-- DropForeignKey
ALTER TABLE `carts` DROP FOREIGN KEY `customerId`;

-- CreateIndex
CREATE UNIQUE INDEX `carts_customerId_key` ON `carts`(`customerId`);

-- AddForeignKey
ALTER TABLE `cart-watch` ADD CONSTRAINT `cartId` FOREIGN KEY (`cartId`) REFERENCES `carts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cart-watch` ADD CONSTRAINT `watchId` FOREIGN KEY (`watchId`) REFERENCES `watches`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `customerId` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

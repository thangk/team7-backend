-- DropForeignKey
ALTER TABLE `cart-watch` DROP FOREIGN KEY `cart-watch_cartId_fkey`;

-- DropForeignKey
ALTER TABLE `cart-watch` DROP FOREIGN KEY `cart-watch_watchId_fkey`;

-- DropForeignKey
ALTER TABLE `carts` DROP FOREIGN KEY `carts_customerId_fkey`;

-- AddForeignKey
ALTER TABLE `cart-watch` ADD CONSTRAINT `cartId` FOREIGN KEY (`cartId`) REFERENCES `carts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cart-watch` ADD CONSTRAINT `watchId` FOREIGN KEY (`watchId`) REFERENCES `watches`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `customerId` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

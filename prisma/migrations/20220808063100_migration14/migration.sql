-- DropForeignKey
ALTER TABLE `cart-watch` DROP FOREIGN KEY `cartId`;

-- DropForeignKey
ALTER TABLE `cart-watch` DROP FOREIGN KEY `watchId`;

-- DropForeignKey
ALTER TABLE `carts` DROP FOREIGN KEY `customerId`;

-- AddForeignKey
ALTER TABLE `cart-watch` ADD CONSTRAINT `cart-watch_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `carts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cart-watch` ADD CONSTRAINT `cart-watch_watchId_fkey` FOREIGN KEY (`watchId`) REFERENCES `watches`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

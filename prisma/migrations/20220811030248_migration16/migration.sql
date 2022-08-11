-- DropForeignKey
ALTER TABLE `cart-watch` DROP FOREIGN KEY `cartId`;

-- DropForeignKey
ALTER TABLE `cart-watch` DROP FOREIGN KEY `watchId`;

-- AddForeignKey
ALTER TABLE `cart-watch` ADD CONSTRAINT `cartId` FOREIGN KEY (`cartId`) REFERENCES `carts`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cart-watch` ADD CONSTRAINT `watchId` FOREIGN KEY (`watchId`) REFERENCES `watches`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

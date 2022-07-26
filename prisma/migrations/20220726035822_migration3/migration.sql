/*
  Warnings:

  - Added the required column `cartId` to the `cart-watch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `watchId` to the `cart-watch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cartId` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart-watch` ADD COLUMN `cartId` INTEGER NOT NULL,
    ADD COLUMN `watchId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `carts` ADD COLUMN `customerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `customers` ADD COLUMN `cartId` INTEGER NOT NULL;

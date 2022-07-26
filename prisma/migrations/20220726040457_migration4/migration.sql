/*
  Warnings:

  - You are about to alter the column `price` on the `watches` table. The data in that column could be lost. The data in that column will be cast from `Decimal(2,0)` to `Decimal(9,2)`.

*/
-- AlterTable
ALTER TABLE `watches` MODIFY `price` DECIMAL(9, 2) NULL;

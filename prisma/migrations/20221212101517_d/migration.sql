/*
  Warnings:

  - You are about to drop the column `area` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `area`,
    DROP COLUMN `level`,
    ADD COLUMN `areaId` VARCHAR(191) NULL,
    ADD COLUMN `levelId` VARCHAR(191) NULL;

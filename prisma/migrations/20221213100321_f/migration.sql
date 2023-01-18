/*
  Warnings:

  - You are about to alter the column `name` on the `Area` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - You are about to drop the column `areaId` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `levelId` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `periodId` on the `Company` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `level` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Area` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Company` DROP COLUMN `areaId`,
    DROP COLUMN `levelId`,
    DROP COLUMN `periodId`;

-- AlterTable
ALTER TABLE `level` MODIFY `name` VARCHAR(191) NOT NULL;

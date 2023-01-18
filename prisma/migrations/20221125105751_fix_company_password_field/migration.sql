/*
  Warnings:

  - Made the column `password` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Company` MODIFY `password` VARCHAR(191) NOT NULL;

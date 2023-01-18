/*
  Warnings:

  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verificationtokens` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `username` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `accounts`;

-- DropTable
DROP TABLE `sessions`;

-- DropTable
DROP TABLE `verificationtokens`;

-- CreateTable
CREATE TABLE `refresh_token` (
    `id` VARCHAR(191) NOT NULL,
    `expireIn` INTEGER NOT NULL,
    `userId` VARCHAR(191) NULL,
    `companyId` VARCHAR(191) NULL,

    UNIQUE INDEX `refresh_token_userId_key`(`userId`),
    UNIQUE INDEX `refresh_token_companyId_key`(`companyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

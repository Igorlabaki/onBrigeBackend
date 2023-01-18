/*
  Warnings:

  - You are about to alter the column `name` on the `Area` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Area` MODIFY `name` ENUM('BACKEND', 'FRONTEND', 'FULLSTACK', 'SECURITY', 'DATASCIENCE') NOT NULL;

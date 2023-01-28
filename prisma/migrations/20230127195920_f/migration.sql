/*
  Warnings:

  - You are about to drop the column `avatar` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Job` DROP COLUMN `avatar`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `bio`,
    ADD COLUMN `about` TEXT NULL;

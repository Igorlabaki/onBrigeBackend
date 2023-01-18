/*
  Warnings:

  - You are about to drop the column `text` on the `Skill` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Skill_text_key` ON `Skill`;

-- AlterTable
ALTER TABLE `Skill` DROP COLUMN `text`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Skill_name_key` ON `Skill`(`name`);

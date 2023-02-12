/*
  Warnings:

  - Added the required column `added_by` to the `Branch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `branch` ADD COLUMN `added_by` VARCHAR(191) NOT NULL;

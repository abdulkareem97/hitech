/*
  Warnings:

  - Added the required column `balance_fee` to the `admissionForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course_fee` to the `admissionForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fee_paid` to the `admissionForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admissionform` ADD COLUMN `balance_fee` DOUBLE NOT NULL,
    ADD COLUMN `course_fee` DOUBLE NOT NULL,
    ADD COLUMN `fee_paid` DOUBLE NOT NULL;

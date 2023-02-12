/*
  Warnings:

  - You are about to drop the `userexample` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `added_by` to the `AdmissionForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `AdmissionForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Branch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `added_by` to the `EnquiryForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `EnquiryForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admissionform` ADD COLUMN `added_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `branch` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `enquiryform` ADD COLUMN `added_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `userexample`;

-- CreateTable
CREATE TABLE `FeeDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `admissionFormId` INTEGER NOT NULL,
    `fee_collected` DOUBLE NOT NULL,
    `collected_by` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FeeDetails` ADD CONSTRAINT `FeeDetails_admissionFormId_fkey` FOREIGN KEY (`admissionFormId`) REFERENCES `AdmissionForm`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

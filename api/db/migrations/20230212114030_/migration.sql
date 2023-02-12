/*
  Warnings:

  - You are about to drop the `feedetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `feedetails` DROP FOREIGN KEY `FeeDetails_admissionFormId_fkey`;

-- DropTable
DROP TABLE `feedetails`;

-- CreateTable
CREATE TABLE `FeeDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `admissionFormId` INTEGER NOT NULL,
    `fee_collected` DOUBLE NOT NULL,
    `collected_by` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FeeDetail` ADD CONSTRAINT `FeeDetail_admissionFormId_fkey` FOREIGN KEY (`admissionFormId`) REFERENCES `AdmissionForm`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

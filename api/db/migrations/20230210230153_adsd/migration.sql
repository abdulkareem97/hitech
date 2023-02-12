-- DropForeignKey
ALTER TABLE `admissionform` DROP FOREIGN KEY `admissionForm_branchId_fkey`;

-- AddForeignKey
ALTER TABLE `AdmissionForm` ADD CONSTRAINT `AdmissionForm_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `Branch`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

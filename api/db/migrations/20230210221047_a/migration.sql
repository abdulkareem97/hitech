-- CreateTable
CREATE TABLE `UserExample` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,

    UNIQUE INDEX `UserExample_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EnquiryForm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_name` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `father_name` VARCHAR(191) NOT NULL,
    `mother_name` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `father_occupation` VARCHAR(191) NOT NULL,
    `qualification` VARCHAR(191) NOT NULL,
    `mobile_no` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `selected_course` VARCHAR(191) NOT NULL,
    `branchId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admissionForm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_name` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `father_name` VARCHAR(191) NOT NULL,
    `mother_name` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `father_occupation` VARCHAR(191) NOT NULL,
    `qualification` VARCHAR(191) NOT NULL,
    `mobile_no` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `selected_course` VARCHAR(191) NOT NULL,
    `branchId` INTEGER NOT NULL,
    `date_of_joining` DATETIME(3) NOT NULL,
    `date_of_ending` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EnquiryForm` ADD CONSTRAINT `EnquiryForm_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `Branch`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `admissionForm` ADD CONSTRAINT `admissionForm_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `Branch`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

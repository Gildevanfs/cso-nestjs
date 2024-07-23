-- CreateTable
CREATE TABLE `tb_users` (
    `id_user_usr` INTEGER NOT NULL AUTO_INCREMENT,
    `des_email_usr` VARCHAR(191) NOT NULL,
    `des_name_usr` VARCHAR(191) NULL,
    `dta_insert_usr` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dta_update_usr` DATETIME(3) NOT NULL,

    UNIQUE INDEX `tb_users_des_email_usr_key`(`des_email_usr`),
    PRIMARY KEY (`id_user_usr`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Company_cityId_idx` ON `Company`(`cityId`);

-- CreateIndex
CREATE INDEX `Company_countryId_idx` ON `Company`(`countryId`);

-- CreateIndex
CREATE INDEX `Job_companyId_idx` ON `Job`(`companyId`);

-- CreateIndex
CREATE INDEX `Job_areaId_idx` ON `Job`(`areaId`);

-- CreateIndex
CREATE INDEX `Job_periodId_idx` ON `Job`(`periodId`);

-- CreateIndex
CREATE INDEX `Job_levelId_idx` ON `Job`(`levelId`);

-- CreateIndex
CREATE INDEX `Job_countryId_idx` ON `Job`(`countryId`);

-- CreateIndex
CREATE INDEX `Job_cityId_idx` ON `Job`(`cityId`);

-- CreateIndex
CREATE INDEX `Link_fk_id_user_idx` ON `Link`(`fk_id_user`);

-- CreateIndex
CREATE INDEX `jobSkills_fk_id_job_idx` ON `jobSkills`(`fk_id_job`);

-- CreateIndex
CREATE INDEX `jobSkills_fk_id_skill_idx` ON `jobSkills`(`fk_id_skill`);

-- CreateIndex
CREATE INDEX `users_areaId_idx` ON `users`(`areaId`);

-- CreateIndex
CREATE INDEX `users_cityId_idx` ON `users`(`cityId`);

-- CreateIndex
CREATE INDEX `users_levelId_idx` ON `users`(`levelId`);

-- CreateIndex
CREATE INDEX `users_countryId_idx` ON `users`(`countryId`);

-- CreateIndex
CREATE INDEX `users_locationInterestingId_idx` ON `users`(`locationInterestingId`);

-- CreateIndex
CREATE INDEX `usersJobs_fk_id_job_idx` ON `usersJobs`(`fk_id_job`);

-- CreateIndex
CREATE INDEX `usersJobs_fk_id_user_idx` ON `usersJobs`(`fk_id_user`);

-- CreateIndex
CREATE INDEX `usersSkills_fk_id_user_idx` ON `usersSkills`(`fk_id_user`);

-- CreateIndex
CREATE INDEX `usersSkills_fk_id_skill_idx` ON `usersSkills`(`fk_id_skill`);

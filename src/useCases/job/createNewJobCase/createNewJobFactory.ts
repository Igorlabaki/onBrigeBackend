import { client } from "../../../prisma/client";
import { CreateNewJobCase } from "./createNewJobCase";
import { CreateNewJobController } from "./createNewJobController";
import { PrismaJobRepository } from "../../../repository/in-prisma/PrismaJobRepository";
import { PrismaAreaRepository } from "../../../repository/in-prisma/PrismaAreaRepository";
import { PrismaLevelRepository } from "../../../repository/in-prisma/PrismaLevelRepository";
import { PrismaPeriodRepository } from "../../../repository/in-prisma/PrismaPeriodRepository";
import { PrismaCountryRepository } from "../../../repository/in-prisma/PrismaCountryRepository";
import { PrismaCityRepository } from "../../../repository/in-prisma/PrismaCityRepository";

export const createNewJobFactory = () => {
  const prismaJobRepository         = new PrismaJobRepository(client);
  const areaRepository              = new PrismaAreaRepository(client);
  const cityRepository              = new PrismaCityRepository(client);
  const levelRepository             = new PrismaLevelRepository(client);
  const periodRepository            = new PrismaPeriodRepository(client);
  const countryRepository           = new PrismaCountryRepository(client);
  const registerCompanysCase        = new CreateNewJobCase(prismaJobRepository,countryRepository, areaRepository,cityRepository, levelRepository,periodRepository);
  const registerCompanyController   = new CreateNewJobController(registerCompanysCase);
  
  return registerCompanyController;
};
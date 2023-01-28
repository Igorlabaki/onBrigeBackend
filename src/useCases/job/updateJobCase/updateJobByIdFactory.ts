import { client } from "../../../prisma/client"
import { UpdateJobByIdCase } from "./updateJobByIdCase"
import { UpdateJobByIdController } from "./updateJobByIdController"
import { PrismaJobRepository } from "../../../repository/in-prisma/PrismaJobRepository"
import { PrismaAreaRepository } from "../../../repository/in-prisma/PrismaAreaRepository";
import { PrismaCityRepository } from "../../../repository/in-prisma/PrismaCityRepository";
import { PrismaLevelRepository } from "../../../repository/in-prisma/PrismaLevelRepository";
import { PrismaPeriodRepository } from "../../../repository/in-prisma/PrismaPeriodRepository";
import { PrismaCountryRepository } from "../../../repository/in-prisma/PrismaCountryRepository";

export const updateJobByIdFactory = () => {
    const prismaJobRepository         = new PrismaJobRepository(client);
    const areaRepository              = new PrismaAreaRepository(client);
    const cityRepository              = new PrismaCityRepository(client);
    const levelRepository             = new PrismaLevelRepository(client);
    const periodRepository            = new PrismaPeriodRepository(client);
    const countryRepository           = new PrismaCountryRepository(client);
    const updateJobByIdCase           = new UpdateJobByIdCase(prismaJobRepository,countryRepository, areaRepository,cityRepository, levelRepository,periodRepository);
    const updateJobByIdController     = new UpdateJobByIdController(updateJobByIdCase)

    return updateJobByIdController
}